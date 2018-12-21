<header id="desktop" class="headnav">
    <div class="container-fluid">
        <div class="navmenu">
            <div class="flex flex-center">
                <a href="<?= base_url(); ?>" class="goleft logo"><img src="<?= base_url(); ?>assets/images/logo.png"></a>
                <ul id="menu" class="mainmenu flex flex-center">
                    <li data-menuanchor="beranda"><a href="<?= base_url(); ?>#beranda">beranda</a></li>
                    <li data-menuanchor="tentang-kami" class="drops"><a href="<?= base_url(); ?>#tentang-kami">tentang kami <span><i class="ion-ios-arrow-down"></i></span></a>
                        <div class="dropdown-content">
                            <a href="<?= base_url(); ?>selayang">profil perusahaan</a>
                            <a href="<?= base_url(); ?>sejarah">sejarah kami</a>
                            <a href="<?= base_url(); ?>warisan">penghargaan</a>
                        </div>
                    </li>
                    <li data-menuanchor="produk-kami"><a href="<?= base_url(); ?>#produk-kami">produk kami</a></li>
                    <li data-menuanchor="event" class="drops"><a href="#event">event <span><i class="ion-ios-arrow-down"></i></span></a>
                        <div class="dropdown-content">
                            <a class="gotabs" data-tab="tab-1" href="<?= base_url(); ?>#event">event yang akan datang</a>
                            <a class="gotabs" data-tab="tab-2" href="<?= base_url(); ?>#event">semua event</a>
                        </div>
                    </li>
                    <li data-menuanchor="keanggotaan"><a href="<?= base_url(); ?>#keanggotaan">keanggotaan</a></li>
                    <li data-menuanchor="faq"><a href="<?= base_url(); ?>faq">faq</a></li>
                </ul>
                <div class="lang goright">
                    <a class="langFlag eng  <? if ($setting->setting__system_language2 == $lang): ?>yelcol<? endif; ?>" href="#" onclick="changeLanguage('<?= $setting->setting__system_language2; ?>');"><span><img src="<?= base_url(); ?>assets/images/eng.png"></span><?= $setting->setting__system_language2; ?></a>
                    <a class="langFlag ind  <? if ($setting->setting__system_language == $lang): ?>yelcol<? endif; ?>" href="#" onclick="changeLanguage('<?= $setting->setting__system_language; ?>');"><span><img src="<?= base_url(); ?>assets/images/ind.png"></span><?= $setting->setting__system_language; ?></a>
                    <button class="yellow btnSearch"><i class="ion-ios-search"></i></button>
                </div>
                <div class="search--field">
                    <form>
                        <input class="form-control slidestext" type="text" name="search" id="search" placeholder="Pencarian">
                    </form>
                </div>
                <div class="burger">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</header>

<header id="mobile" class="headnav">
    <div class="container-fluid">
        <div class="navmenu">
            <div class="flex flex-center">
                <a href="<?= base_url(); ?>" class="goleft logo"><img src="<?= base_url(); ?>assets/images/logo.png"></a>
                <ul id="menu" class="mainmenu flex flex-center">
                    <li data-menuanchor="beranda"><a href="<?= base_url(); ?>#beranda">beranda</a></li>
                    <li data-menuanchor="tentang-kami" class="drops"><a href="#tentang-kami">tentang kami <span><i class="ion-ios-arrow-down"></i></span></a>
                        <div class="dropdown-content">
                            <a href="<?= base_url(); ?>selayang">profil perusahaan</a>
                            <a href="<?= base_url(); ?>sejarah">sejarah kami</a>
                            <a href="<?= base_url(); ?>warisan">penghargaan</a>
                        </div>
                    </li>
                    <li data-menuanchor="produk-kami"><a href="<?= base_url(); ?>#produk-kami">produk kami</a></li>
                    <li data-menuanchor="event" class="drops"><a href="#event">event <span><i class="ion-ios-arrow-down"></i></span></a>
                        <div class="dropdown-content">
                            <a class="gotabs" data-tab="tab-1" href="<?= base_url(); ?>#event">event yang akan datang</a>
                            <a class="gotabs" data-tab="tab-2" href="<?= base_url(); ?>#event">semua event</a>
                        </div>
                    </li>
                    <li data-menuanchor="keanggotaan"><a href="<?= base_url(); ?>#keanggotaan">keanggotaan</a></li>
                    <li data-menuanchor="faq"><a href="<?= base_url(); ?>faq">faq</a></li>
                    <li class="lang flex">
                        <a class="langFlag eng <? if ($setting->setting__system_language2 == $lang): ?>yelcol<? endif; ?>" href="#" onclick="changeLanguage('<?= $setting->setting__system_language2; ?>');"><span><img src="<?= base_url(); ?>assets/images/eng.png"></span><?= $setting->setting__system_language2; ?></a>
                        <a class="langFlag ind <? if ($setting->setting__system_language == $lang): ?>yelcol<? endif; ?>" href="#" onclick="changeLanguage('<?= $setting->setting__system_language1; ?>');"><span><img src="<?= base_url(); ?>assets/images/ind.png"></span><?= $setting->setting__system_language; ?></a>
                        <button class="yellow btnSearch"><i class="ion-ios-search"></i></button>
                    </li>
                    <div class="search--field">
                        <form>
                            <input class="form-control slidestext" type="text" name="search" id="search" placeholder="Pencarian">
                        </form>
                    </div>
                    <!-- <li><a class="langFlag eng" href=""><span><img src="<?= base_url(); ?>assets/images/eng.png"></span>eng</a></li>
                    <li><a class="langFlag ind" href=""><span><img src="<?= base_url(); ?>assets/images/ind.png"></span>ind</a></li>
                    <li><a class="yellow open-popup-search" href="#popupsearch"><i class="ion-ios-search"></i></a></li> -->
                </ul>
                <div class="burger">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</header>

 <!-- start popup area -->
<!-- <div id="popupsearch" class="white-popup mfp-hide">
    <div class="newsletter-content">
        <div class="mail-input">
            <form id="mc-form">
                <input id="search" class="slidestext" type="text" name="search" placeholder="Pencarian">
                <button type="submit" class="theme-default-btn gradient-bg-2">Cari</button>
            </form>
        </div>
    </div>
</div> --><!-- popup search -->
<!-- end popup area -->