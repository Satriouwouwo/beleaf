$(document).ready(function(){var e=document.querySelectorAll(".hamburger");function n(e){e.addClass("active").siblings().removeClass("active")}if(0<e.length&&function(e,o,t){if("[object Object]"===Object.prototype.toString.call(e))for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.call(t,e[n],n,e);else for(var i=0,a=e.length;i<a;i++)o.call(t,e[i],i,e)}(e,function(e){e.addEventListener("click",function(){this.classList.toggle("is-active")},!1)}),$("#fullpage").fullpage({menu:"#menu",lockAnchors:!1,anchors:["slidebanner","product","people","findus","aboutus"],navigation:!1,navigationPosition:"left",navigationTooltips:["Slidebanner","Products","People","Find Us","About Us"],showActiveTooltip:!0,responsiveWidth:1e3,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,afterLoad:function(e,o){1==o&&$("#fp-nav").hide()},onLeave:function(e,o,t){n($("#my-nav").find("li").eq(o-1))},afterRender:function(){n($("#my-nav").find("li").eq($(".section.active").index()))},afterResize:function(e,o){},afterResponsive:function(e){},afterSlideLoad:function(e,o,t,n){}}),$(".icondots").click(function(){var e=$(this).closest("li");$.fn.fullpage.moveTo(e.index()+1)}),$("#owl-home-banner").owlCarousel({loop:!0,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!1,animateOut:"fadeOut",animateIn:"fadeIn",responsive:{0:{items:1}}}),$(".products-slider").slick({slidesToShow:1,infinite:!0,draggable:!1,arrows:!0,infinite:!0,autoplay:!0,autoplaySpeed:4e3,prevArrow:"<button class='ion-ios-arrow-thin-left arrowLeft'></button>",nextArrow:"<button class='ion-ios-arrow-thin-right arrowRight'></button>",nav:!0,animateOut:"fadeOut",items:1}),1024<$(window).width()){var o=document.getElementById("scene");new Parallax(o)}$("#owl-people").owlCarousel({loop:!0,nav:!0,navText:["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],dots:!1,items:2,autoplayHoverPause:!1,animateOut:"fadeOut",animateIn:"fadeIn"})}),$(".burger").click(function(){$(".burger").toggleClass("clicked"),$(".mainmenu").toggleClass("show")});