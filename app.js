$(document).ready(function() {

  $('#homepage').fullpage({
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 2000,
    verticalCentered: true,
    scrollOverflow: false,
    normalScrollElements: '.mfp-content',
    navigation: true,
    menu: '#menu',
    anchors: ['beranda', 'tentang-kami', 'produk-kami', 'event', 'keanggotaan'],
    navigationPosition: 'left',
    responsiveWidth: 1000,
    afterLoad: function(){
        //playing the video
      $('#vide1').data('vide').getVideoObject().play();
      $('#vide2').data('vide').getVideoObject().play();
      $('#vide3').data('vide').getVideoObject().play();
      $('#vide4').data('vide').getVideoObject().play();
    } ,
  });

  $('.fp-prev').append('<span class="ion-ios-arrow-left"></span>');
  $('.fp-next').append('<span class="ion-ios-arrow-right"></span>');

  //SLIDER BOTTLE
  $('.bollteWrap-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    infinite: true,
    autoplaySpeed: 2000,
    prevArrow: "<button class='ion-ios-arrow-thin-left arrowLeft'></button>",
    nextArrow: "<button class='ion-ios-arrow-thin-right arrowRight'></button>"
  });

      // $('.bollteWrap-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      //   $('.imgGlass .botol-custom').removeClass('waterfall');
      //   $('.imgGlass.slick-current .botol-custom').addClass('waterfall');
      // });

  ///SLIDER SEJARAH, MILESTONE
  $('.sliders--').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 400,
      asNavFor: '.nav--'
  });
  $('.nav--').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '.sliders--',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: true
  });

  $('.cstmLeft').click(function(){
    $('.sliders--').slick('slickPrev');
  });

  $('.cstmRight').click(function(){
    $('.sliders--').slick('slickNext');
  });

  ///SLIDER WARISAN
  $('.slide--warisanContent').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 400,
      asNavFor: '.nav--warisanContent'
  });
  $('.nav--warisanContent').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.slide--warisanContent',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: true,
      prevArrow: "<button class='ion-ios-arrow-thin-left arrowLeft'></button>",
      nextArrow: "<button class='ion-ios-arrow-thin-right arrowRight'></button>"
  });

  ///SLIDER PRODUK
  $('.slide--contentProd').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      draggable: true,
      fade: true,
      adaptiveHeight: false,
      vertical: false,
      infinite: true,
      useTransform: true,
      speed: 400,
      centerMode: true,
      asNavFor: '.nav--contentProd'
  });
  $('.nav--contentProd').slick({
      centerMode: true,
      centerPadding: '57px',
      slidesToShow: 1,
      asNavFor: '.slide--contentProd',
      dots: false,
      arrows:false,
  });

  $('.cstmBot').click(function(){
    $('.slide--contentProd').slick('slickPrev');
  });

  $('.cstmTop').click(function(){
    $('.slide--contentProd').slick('slickNext');
  });

  // NAV TAB MENU
  $('.gotabs').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('.tab-content .tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
  });

  ///THIS IS CUSTOM TABS
  $('.tab-content .tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tab-content .tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');

      if ($('#tab-2').hasClass('current')) {
          ///SLIDER PENGHARGAAN
          $('.slide--penghargaan').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: true,
              adaptiveHeight: true,
              infinite: false,
              useTransform: true,
              speed: 400,
              asNavFor: '.nav--penghargaan'
          });
          $('.nav--penghargaan').slick({
              slidesToShow: 2,
              slidesToScroll: 1,
              asNavFor: '.slide--penghargaan',
              dots: false,
              centerMode: false,
              focusOnSelect: true,
              arrows: true,
              prevArrow: "<button class='ion-ios-arrow-thin-left arrowLeft'></button>",
              nextArrow: "<button class='ion-ios-arrow-thin-right arrowRight'></button>"
          });
      }
      else {

          }

      if ($('#tab-3').hasClass('current')){
               //SLIDER IMG TABS
               $('.img-abslt').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
                arrows: true,
                autoplaySpeed: 2000,
                prevArrow: "<button class='ion-ios-arrow-thin-left arrowLeft'></button>",
                nextArrow: "<button class='ion-ios-arrow-thin-right arrowRight'></button>"
              });
          }else{

          }

  });

  $('.btnCont').click(function() {
      $('.formContact').toggleClass( "show" );

  });
  $('.btnSearch').click(function() {
      $('.search--field').toggleClass( "out" );

  });

//========================================
  // //POP UP PRODUK
  // $('.open-popup-produk').magnificPopup({
  //     type:'inline',
  //     midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  //     closeMarkup: '<button id="turnOn" title="%title%" type="button" class="mfp-close closePop">tutup</button>',
  //     callbacks: {
  //         close: function() {
  //            turnOnScrollFullPage();
  //         },
  //         open: function() {
  //           initSliders();
  //           turnOffScrollFullPage();
  //         }
  //       }
  // });

  //POP UP EVENT
  $('.open-popup-event').magnificPopup({
      type:'inline',
      midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      closeMarkup: '<button title="%title%" type="button" class="mfp-close closePop">tutup</button>',
      callbacks: {
          close: function() {
             turnOnScrollFullPage();
          },
          open: function() {
            turnOffScrollFullPage();
          }
        }
  });

  //POP SEARCH
  $('.open-popup-search').magnificPopup({
      type:'inline',
      midClick: true,
      callbacks: {
          close: function() {
             turnOnScrollFullPage();
          },
          open: function() {
            turnOffScrollFullPage();
          }
        }
  });

  //POP ALL EVENTS
  $('.open-popup-events').magnificPopup({
      type:'inline',
      midClick: true,
      closeOnBgClick: true,
      closeMarkup: '<button title="%title%" type="button" class="mfp-close closePop">tutup</button>',
  });

//MEDIABOX YOUTUBE
MediaBox('.mediabox');

// ============================================================= FORM VALIDATION ==================================================================== //

  $(function(){
    //event form
    $('#contact').validate({
      rules:{
        fullname:
        {
          required: true
        },
        email:
        {
          required: true,
          email: true
        },
        message:
        {
          required: true
        },
         phone:
        {
          required: true
        },
         subject:
        {
          required: true
        },
        comment:
        {
          required: true
        }
      },
      message: {
        //custom, if any
      }

    });

    //keanggotaan form
    validator = $('#anggota').validate({

      rules:{
        firstname:
        {
          required: true
        },
        lastname:
        {
          required: true
        },
        dob: {
          required: true,
          minAge: 21
        },
        email:
        {
          required: true,
          email: true
        },
        phone:
        {
          required: true
        }

      },

      message:{
        dob:
        {
            required: "Please enter you date of birth.",
            minAge: "You must be at least 21 years old!"
        }
      },

      errorPlacement: function() {
        return false;
      },
      submitHandler: function (form) {
        popup();
      }

      // submitHandler: function() {

      //   // $('.btnPopup').magnificPopup('open');
      //   $('.btnPopup').magnificPopup({
      //       type: 'inline',
      //       callbacks: {
      //       open: function() {
      //           formPopup();
      //           turnOffScrollFullPage();
      //           turnOnScrollFullPage();
      //         },
      //         close: turnOnScrollFullPage
      //       }

      //   }).magnificPopup('open'); //abis validasi berhasil, nongol thepopUp

      //   validator.resetForm();//clear field thePopup

      //   //nah, tapi klo di klik submit lg, thepop muncul lagi, padahal belom isi form.

      // }

    });
  });
  //POPUP FORM
  function popup(){
      $.magnificPopup.open({
        items: {
          src: '#formPopup'
        },
        type: 'inline',
        closeOnBgClick: false,
        callbacks: {
          close: function() {
            $('#anggota').trigger("reset");
             validator.reset();
             turnOnScrollFullPage();
          },
          open: function() {
            turnOffScrollFullPage();
          }
        }
      });
  }


    // $('#member-submit').click(function() {
    //   var found = 0;
    //   var email = $('input[name=email]').val();

    //   // $.each($('.data-important'), function(key, value) {
    //   //   if ($(this).val() == '') {
    //   //     found += 1;

    //   //     $(this).prev().children().show('required!');
    //   //   }
    //   // });

    //   // if (!isEmail(email)) {
    //   //   found += 1;

    //   //   $(this).prev().children().show('required!');
    //   // }

    //   if (found > 0) {
    //     return;
    //   }

    //   // panggil modal pertanyaan
    // });

  // $("#anggota").validate({
  //   submitHandler: function(form) {
  //     // do other things for a valid form
  //     $('#formPopup').magnificPopup({
  //       type:'inline',
  //       midClick: true
  //       // (optionally) other options
  //     }).magnificPopup('open');
  //     form.submit();
  //   }
  // });

  // // MEDIA VIDEO BACKGROUND
  // // play pause vid banner
  // // BACKGROUND VIDEO
  $('#vide1').vide({
    mp4: "assets/video/Anggur_Kolesom.mp4",
    webm: "assets/video/Anggur_Kolesom.webm",
    ogv: "assets/video/Anggur_Kolesom.ogv",
    poster: 'assets/video/Anggur_Kolesom.jpg'
  }, {
    resizing: true,
    position: '50% 50%',
    bgColor: 'transparent'
  });

  $('#vide2').vide({
    mp4: "assets/video/Arak.mp4",
    webm: "assets/video/Arak.webm",
    ogv: "assets/video/Arak.ogv",
    poster: 'assets/video/Arak.jpg'
  }, {
    resizing: true,
    position: '50% 50%',
    bgColor: 'transparent'
  });

    $('#vide3').vide({
    mp4: "assets/video/Ketan_Hitam.mp4",
    webm: "assets/video/Ketan_Hitam.webm",
    ogv: "assets/video/Ketan_Hitam.ogv",
    poster: 'assets/video/Ketan_Hitam.jpg'
  }, {
    resizing: true,
    position: '50% 50%',
    bgColor: 'transparent'
  });

  $('#vide4').vide({
    mp4: "assets/video/Anggur_Merah.mp4",
    webm: "assets/video/Anggur_Merah.webm",
    ogv: "assets/video/Anggur_Merah.ogv",
    poster: 'assets/video/Anggur_Merah.jpg'
  }, {
    resizing: true,
    position: '50% 50%',
    bgColor: 'transparent'
  });

  $('.burger').click(function(){
    $('.burger').toggleClass('clicked');
    $('.mainmenu').toggleClass('show');
  });

  // FLEXslider
  $('.flexslider').flexslider({
    animation: "fade",
    directionNav: true,
    animationLoop: true,
    controlNav: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    prevText: "<button class='ion-chevron-left'></button>",
    nextText: "<button class='ion-chevron-right'></button>"
  });

    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("#desktop").css({
        "background": "rgba(43, 5, 4, 0.9)",
        "box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"
      });
    }

    else{
      $("#desktop").css({
        "background": "transparent",
        "box-shadow": "none"
      });
    }
  });

    // Detect Screen
    $(function(){
      var width = $(window).innerWidth();
      var height = $(window).innerHeight();
      var thumbheight = (height)/5;
      $('.minbox').css({ height: thumbheight + 'px' });
      $('.fullscreen').css({ minHeight: height + 'px',width: $(window).innerWidth() + 'px' });
      $('.mobilefull').css({ minHeight: height + 'px',width: $(window).innerWidth() + 'px' });
      $('.rectacngle').css({ height: height*3 + 'px',width: height*3 + 'px' });
      $('.fullheight').css({ height: height + 'px'});
      $('.halfheight').css({ minHeight: height/2 + 'px'});
      $('.4height').css({ height: height/4 + 'px'});
      $('.3height').css({ height: height/3 + 'px'});
      $('.fullwidth').css({ width: width + 'px'});
        $('.halfwidth').css({ width: width/2 + 'px',minHeight: height/2 + 'px'});
      $(window).resize(function(){
        var width = $(window).innerWidth();
        var height = $(window).innerHeight();
        var thumbheight = (height-100)/5;
        $('.minbox').css({ height: thumbheight + 'px' });
          $('.rectacngle').css({ height: height*3 + 'px',width: height*3 + 'px' });
        $('.fullscreen').css({ minHeight: height-100 + 'px',width: $(window).innerWidth() + 'px' });
        $('.fullheight').css({ height: height-100 + 'px'});
        $('.fullwidth').css({ width: width + 'px'});
        $('.halfheight').css({ minHeight: height/2 + 'px'});
        $('.4height').css({ height: height/4 + 'px'});
        $('.3height').css({ height: height/3 + 'px'});
          $('.halfwidth').css({ width: width/2 + 'px',minHeight: height/2 + 'px'});
      });
    });

});///Document ready


  // function isEmail(email) {
  //     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //     return regex.test(email);
  // }

function turnOffScrollFullPage(){
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
}

function turnOnScrollFullPage(){
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
}

// function initSliders() {
//   ///SLIDER POPUP
//   $('.popSlide--content').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       fade: true,
//       draggable: false,
//       adaptiveHeight: true,
//       infinite: false,
//       useTransform: true,
//       draggable: false,
//       speed: 400,
//       asNavFor: '.nav-slidePopup'
//   });
//   $('.nav-slidePopup').slick({
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       draggable: false,
//       asNavFor: '.popSlide--content',
//       dots: false,
//       centerMode: false,
//       focusOnSelect: true,
//       arrows: true,
//       prevArrow: "<button class='ion-ios-arrow-thin-left nongol arrowLeft'></button>",
//       nextArrow: "<button class='ion-ios-arrow-thin-right nongol arrowRight'></button>"
//   });

// };



//FORM POPUP KEANGGOTAAN
// function formPopup(){

//   $('.formMember--list').slick({
//       rtl: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       fade: true,
//       adaptiveHeight: true,
//       infinite: false,
//       useTransform: true,
//       draggable: false,
//       speed: 400
//   });

// };
