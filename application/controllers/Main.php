<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller
{

	/* Public Function Area */
	public function index()
	{
		$arr_data['title'] = 'HOME';
		$arr_data['csrf'] = $this->cms_function->generate_csrf();
        $arr_data['os'] = $this->cms_function->getOS();

		$this->load->view('home', $arr_data);
	}
	/* End Public Function Area */




	/* Ajax Function Area */
    
	/* End Ajax Function Area */




	/* Private Function Area */
	/* End Private Function Area */
}
