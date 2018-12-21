<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cms_function
{
    public function extract_records($records, $field)
    {
        $data = array();

        foreach ($records as $record)
        {
            if (isset($data[$record->$field]))
            {
                continue;
            }

            $data[$record->$field] = $record->$field;
        }

        return array_values($data);
    }

    public function generate_acl($user_id)
    {
        if ($user_id <= 0)
        {
            return array();
        }

        $CI = &get_instance();

        $acl = array();

        $CI->db->select('id');
        $CI->db->where('enabled <=', 0);
        $arr_module = $CI->core_model->get('module');
        $arr_module_id = $CI->cms_function->extract_records($arr_module, 'id');

        $CI->db->where('user_id', $user_id);

        if (count($arr_module_id) > 0)
        {
            $CI->db->where_not_in('module_id', $arr_module_id);
        }

        $arr_user_access = $CI->core_model->get('user_access');

        foreach ($arr_user_access as $user_access)
        {
            $acl[$user_access->module_id] = new stdClass();
            $acl[$user_access->module_id]->add = $user_access->add;
            $acl[$user_access->module_id]->delete = $user_access->delete;
            $acl[$user_access->module_id]->edit = $user_access->edit;
            $acl[$user_access->module_id]->list = $user_access->list;
        }

        return $acl;
    }

	public function generate_csrf()
	{
		$CI = &get_instance();

		$arr_csrf = array();
		$arr_csrf['name'] = $CI->security->get_csrf_token_name();
		$arr_csrf['hash'] = $CI->security->get_csrf_hash();

		return $arr_csrf;
	}

    public function generate_header()
    {
        $CI = &get_instance();

        $CI->db->select('id, type, header_id, name, name_lang, link');
        $CI->db->where('header_id <=', 0);
        $CI->db->order_by('sort');
        $arr_header = $CI->core_model->get('header');
        $arr_header_id = $CI->cms_function->extract_records($arr_header, 'id');

        $arr_header_lookup = array();

        if (count($arr_header_id) > 0)
        {
            $CI->db->where_in('header_id', $arr_header_id);
            $CI->db->order_by('sort');
            $arr_child_header = $CI->core_model->get('header');

            foreach ($arr_child_header as $child_header)
            {
                $arr_header_lookup[$child_header->header_id][] = clone $child_header;
            }
        }

        foreach ($arr_header as $header)
        {
            $header->arr_child_header = (isset($arr_header_lookup[$header->id])) ? $arr_header_lookup[$header->id] : array();
        }

        return $arr_header;
    }

    public function generate_location($arr_image_lookup)
    {
        $CI = &get_instance();

        $arr_location = $CI->core_model->get('location');

        foreach ($arr_location as $location)
        {
            $location->image_name = (isset($arr_image_lookup['location'][$location->id])) ? $arr_image_lookup['location'][$location->id] : '';
        }

        return $arr_location;
    }

	public function generate_metatag($header_id)
	{
		$CI = &get_instance();

		$CI->db->where('header_id', $header_id);
		$arr_metatag = $CI->core_model->get('metatag');

		return (count($arr_metatag) > 0) ? $arr_metatag[0] : '';
	}

    public function generate_section($header_id)
    {
        $CI = &get_instance();

        $CI->db->where('header_id', $header_id);
        $CI->db->order_by('id');
        $arr_section = $CI->core_model->get('section');
        $arr_section_id = $CI->cms_function->extract_records($arr_section, 'id');

        $arr_image_lookup = array();

        if (count($arr_section_id) > 0)
        {
            $CI->db->where_in('section_id', $arr_section_id);
            $arr_image = $CI->core_model->get('image');

            foreach ($arr_image as $image)
            {
                $arr_image_lookup[$image->section_id] = ($image->name != '') ? $image->name : $image->id . '.' . $image->ext;
            }
        }

        foreach ($arr_section as $section)
        {
            $section->image_name = (isset($arr_image_lookup[$section->id])) ? $arr_image_lookup[$section->id] : '';
        }

        return $arr_section;
    }

    public function get_cart($arr_image_lookup)
    {
        $CI = &get_instance();

        $json_cart = $CI->session->userdata('ganesha_cart');
        $arr_cart = (json_decode($json_cart) != null) ? json_decode($json_cart) : array();

        // get all package
        $arr_package = $CI->core_model->get('package');
        $arr_package_lookup = array();

        foreach ($arr_package as $package)
        {
            $package->image_name = (isset($arr_image_lookup['package'][$package->id])) ? $arr_image_lookup['package'][$package->id] : '';
            $arr_package_lookup[$package->id] = clone $package;
        }

        // get all item
        $arr_item = $CI->core_model->get('item');
        $arr_item_lookup = array();

        foreach ($arr_item as $item)
        {
            $item->image_name = (isset($arr_image_lookup['item'][$item->id])) ? $arr_image_lookup['item'][$item->id] : '';
            $arr_item_lookup[$item->id] = clone $item;
        }

        // get all cart data
        foreach ($arr_cart as $cart)
        {
            if ($cart->package_id > 0)
            {
                $cart->package_name = (isset($arr_package_lookup[$cart->package_id])) ? $arr_package_lookup[$cart->package_id]->name : '';
                $cart->package_image_name = (isset($arr_package_lookup[$cart->package_id])) ? $arr_package_lookup[$cart->package_id]->image_name : '';
            }
            else
            {
                $cart->package_name = (isset($arr_item_lookup[$cart->item_id])) ? $arr_item_lookup[$cart->item_id]->name : '';
                $cart->package_image_name = (isset($arr_item_lookup[$cart->item_id])) ? $arr_item_lookup[$cart->item_id]->image_name : '';
            }

            $cart->subtotal = $cart->total;
            $cart->total = $cart->subtotal * $cart->qty;

            $cart->total_display = number_format($cart->total, 0, ',', '.');
            $cart->subtotal_display = number_format($cart->total, 0, ',', '.');
            $cart->item_list_name = '';

            foreach ($cart->arr_item_id as $key => $item_id)
            {
                if ($key <= 0)
                {
                    $cart->item_list_name .=  (isset($arr_item_lookup[$item_id])) ? $arr_item_lookup[$item_id]->name : '';
                }
                else
                {
                    $cart->item_list_name .=  (isset($arr_item_lookup[$item_id])) ? ', ' . $arr_item_lookup[$item_id]->name : '';
                }

            }
        }

        return $arr_cart;
    }

    public function getOS()
    {
        $user_agent = $_SERVER['HTTP_USER_AGENT'];
        $os_platform = "Unknown OS Platform";

        $os_array = array(
            '/windows nt 10/i' => 'Windows',
            '/windows nt 6.3/i' => 'Windows',
            '/windows nt 6.2/i' => 'Windows',
            '/windows nt 6.1/i' => 'Windows',
            '/windows nt 6.0/i' => 'Windows',
            '/windows nt 5.2/i' => 'Windows',
            '/windows nt 5.1/i' => 'Windows',
            '/windows xp/i' => 'Windows',
            '/windows nt 5.0/i' => 'Windows',
            '/windows me/i' => 'Windows',
            '/win98/i' => 'Windows',
            '/win95/i' => 'Windows',
            '/win16/i' => 'Windows',
            '/macintosh|mac os x/i' => 'Mac OS X',
            '/mac_powerpc/i' => 'Mac OS 9',
            '/linux/i' => 'Linux',
            '/ubuntu/i' => 'Ubuntu',
            '/iphone/i' => 'IOS',
            '/ipod/i' => 'IOS',
            '/ipad/i' => 'IOS',
            '/android/i' => 'Android',
            '/blackberry/i' => 'BlackBerry',
            '/webos/i' => 'Mobile');

        foreach ($os_array as $regex => $value)
        {
            if (preg_match($regex, $user_agent))
            {
                $os_platform = $value;
            }
        }

        return $os_platform;
    }

    public function load_image($arr_table)
    {
        $CI = &get_instance();

        foreach ($arr_table as $key => $table)
        {
            if ($key <= 0)
            {
                $CI->db->where($table . '_id >', 0);
            }
            else
            {
                $CI->db->or_where($table . '_id >', 0);
            }
        }

        $CI->db->where('type', '');
        $arr_image = $CI->core_model->get('image');
        $arr_image_lookup = array();

        foreach ($arr_image as $key => $image)
        {
            foreach ($arr_table as $table)
            {
                $column = $table . '_id';

                if ($image->$column > 0)
                {
                    $arr_image_lookup[$table][$image->$column] = ($image->name != '') ? $image->name : $image->id . '.' . $image->ext;
                }
            }
        }

        return $arr_image_lookup;
    }

    public function system_log($type, $record, $old_record, $table)
    {
        $CI = &get_instance();

        $log_record = array();
        $log_record['date'] = time();

        if ($type == 'add')
        {
			$log_record['name'] = (isset($record['name'])) ? 'Add ' . $table . ' ' . $record['name'] : 'Add ' . $table . ' ' . $record['title'];
        }
        elseif ($type == 'edit')
        {
			$log_record['name'] = (isset($record['name'])) ? 'Edit ' . $table . ' ' . $old_record['name'] . ' to ' .  $record['name'] : 'Edit ' . $table . ' ' . $old_record['title'] . ' to ' .  $record['title'];
        }
        elseif ($type == 'delete')
        {
			$log_record['name'] = (isset($record['name'])) ? 'Delete ' . $table . ' ' . $record['name'] : 'Delete ' . $table . ' ' . $record['title'];
        }
        elseif ($type == 'status')
        {
            $status = ($record['active'] > 0) ? 'Active' : 'Inactive';
            $log_record['name'] = (isset($old_record['name'])) ? 'Change Status ' . $old_record['name'] . ' to ' . $status : 'Change Status ' . $old_record['title'] . ' to ' . $status;
        }
        elseif ($type == 'Update Stock')
        {
            $log_record['name'] = 'Update Stock ' . $old_record['name'] . ' from ' . number_format($old_record['quantity'], 0, '', '') . ' to ' . $record['quantity'];
        }
        elseif ($type == 'setting')
        {
            $log_record['name'] = 'Update Setting';
        }

        $log_record['query'] = $record['last_query'];
        $CI->core_model->insert('log', $log_record);
    }
}
