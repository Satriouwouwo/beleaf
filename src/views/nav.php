<!-- <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
    <div class="navbar-logo">
        <a class="navbar-brand" href="<?= base_url(); ?>">
            <img src="<?= base_url(); ?>assets/images/main/logo-home.png">
        </a>
    </div>
    <button class="navbar-toggler hamburger hamburger--spring navbar-btn-custom" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>

    <div class="collapse navbar-collapse navbar-relative" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link-custom" href="#">Product <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link-custom" href="#">About Us</a>
            </li>
            <li class="nav-item dropdown">
                    <a class="nav-link-custom dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link-custom disabled" href="#">Disabled</a>
            </li>
        </ul>
        <div class="navbar-search">
            <div class="wrap-lang">
                <div class="lang">
                    <span>EN</span>
                </div>
                <div class="lang">
                    <span>IN</span>
                </div>
            </div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2 form-search" type="search" placeholder="Search" aria-label="Search">
                <button>
                    <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    </div>
</nav>

 -->

 <!-- START NEW NAV -->
 <header id="desktop" class="headnav">
    <div class="container">
        <div class="navmenu">
            <div class="flex flex-center">
                <a href="<?= base_url(); ?>" class="logo"><img src="<?= base_url(); ?>assets/images/logo.png"></a>
                <ul id="menu" class="mainmenu flex flex-center">
                    <li data-menuanchor="products"><a href="<?= base_url(); ?>#product">Products</a></li>
                    <li data-menuanchor="aboutus"><a href="<?= base_url(); ?>#aboutus">About Us</a></li>
                    <li data-menuanchor="findus"><a href="<?= base_url(); ?>#findus">Location</a></li>
                </ul>
                <div class="lang goright flex flex-center">
                    <a class="langFlag eng" href="">eng</a>
                    <a class="langFlag ind" href="">ind</a>
                    <form class="form-inline">
                        <input class="form-control slidestext form-search" type="search" placeholder="Search" aria-label="Search">
                    </form>
                    <button class="btnSearch"><i class="ion-ios-search"></i></button>
                </div>
                <div class="burger">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- ======================= -->
<header id="mobile" class="headnav">
    <div class="container-fluid">
        <div class="navmenu">
            <div class="flex flex-center">
                <a href="<?= base_url(); ?>" class="goleft logo"><img src="<?= base_url(); ?>assets/images/logo.png"></a>
                <ul id="menu" class="mainmenu flex flex-center">
                    <li data-menuanchor="products"><a href="<?= base_url(); ?>#product">Products</a></li>
                    <li><a href="<?= base_url(); ?>#aboutus">About Us</a></li>
                    <li><a href="<?= base_url(); ?>#findus">Location</a></li>
                    <li class="lang flex">
                        <a class="langFlag eng" href="#">eng</a>
                        <a class="langFlag ind" href="#">ind</a>
                        <form class="form-inline">
                            <input class="form-control slidestext form-search" type="search" placeholder="Search" aria-label="Search">
                        </form>
                        <button class="yellow btnSearch"><i class="ion-ios-search"></i></button>
                    </li>
                </ul>
                <div class="burger">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</header>
