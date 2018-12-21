$(document).ready(function(){
    //humburger menu
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }


//fullpage JS
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',

        lockAnchors: false,
        anchors:['slidebanner', 'product', 'people', 'findus', 'aboutus'],
        navigation: false,
        navigationPosition: 'left',
        navigationTooltips: ['Slidebanner', 'Products','People', 'Find Us', 'About Us'],
        showActiveTooltip: true,
        responsiveWidth: 1000,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //events
        afterLoad: function(anchorLink, index){
            if (index == 1) {
                $('#fp-nav').hide(); // or toggle by class
            }
        },
        onLeave: function(index, nextIndex, direction){
            activateNavItem($('#my-nav').find('li').eq(nextIndex-1));
        },
        afterRender: function(){
            activateNavItem($('#my-nav').find('li').eq($('.section.active').index()));
        },
        afterResize: function(width, height){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(section, origin, destination, direction){},
    });


    // navigation dots custom
    $('.icondots').click(function(){
        var destination = $(this).closest('li');
        $.fn.fullpage.moveTo(destination.index() + 1 );
    });

    function activateNavItem(item){
        item.addClass('active').siblings().removeClass('active');
    }

    //SLIDER BANNER
    $('#owl-home-banner').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive:{
                0:{
                    items:1
                }

            }
        });

    //SLIDER PRODUCTS
    $('.products-slider').slick({
        slidesToShow: 1,
        infinite: true,
        draggable: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: "<button class='ion-ios-arrow-thin-left arrowLeft'></button>",
        nextArrow: "<button class='ion-ios-arrow-thin-right arrowRight'></button>",
        nav: true,
        animateOut: 'fadeOut',
        items: 1
    });

    //PARALLAX FRUIT
    if ($(window).width() > 1024) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }


    $('#owl-people').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
        dots: false,
        items: 2,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        });


    });

      $('.burger').click(function(){
        $('.burger').toggleClass('clicked');
        $('.mainmenu').toggleClass('show');
      });