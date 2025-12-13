(function ($) {
  "use strict";

  $(document).ready(function () {


    /*---------- Mobile Menu  ----------*/
    $.fn.etmobilemenu = function (options) {
      var opt = $.extend(
        {
          menuToggleBtn: ".global-menu-toggle",
          bodyToggleClass: "global-body-visible",
          subMenuClass: "global-submenu",
          subMenuParent: "menu-item-has-children",
          gtSubMenuParent: "menu-item-has-children",
          subMenuParentToggle: "global-active",
          meanExpandClass: "global-mean-expand",
          appendElement: '<span class="global-mean-expand"></span>',
          subMenuToggleClass: "global-open",
          toggleSpeed: 400,
        },
        options
      );

      return this.each(function () {
        var menu = $(this); // Select menu

        // Menu Show & Hide
        function menuToggle() {
          menu.toggleClass(opt.bodyToggleClass);

          // collapse submenu on menu hide or show
          var subMenu = "." + opt.subMenuClass;
          $(subMenu).each(function () {
            if ($(this).hasClass(opt.subMenuToggleClass)) {
              $(this).removeClass(opt.subMenuToggleClass);
              $(this).css("display", "none");
              $(this).parent().removeClass(opt.subMenuParentToggle);
            }
          });
        }

        // Class Set Up for every submenu
        menu.find("." + opt.subMenuParent).each(function () {
          var submenu = $(this).find("ul");
          submenu.addClass(opt.subMenuClass);
          submenu.css("display", "none");
          $(this).addClass(opt.subMenuParent);
          $(this).addClass(opt.gtSubMenuParent); // Add menu-item-has-children class
          $(this).children("a").append(opt.appendElement);
        });

        // Toggle Submenu
        function toggleDropDown($element) {
          var submenu = $element.children("ul");
          if (submenu.length > 0) {
            $element.toggleClass(opt.subMenuParentToggle);
            submenu.slideToggle(opt.toggleSpeed);
            submenu.toggleClass(opt.subMenuToggleClass);
          }
        }

        // Submenu toggle Button
        var itemHasChildren = "." + opt.gtSubMenuParent + " > a";
        $(itemHasChildren).each(function () {
          $(this).on("click", function (e) {
            e.preventDefault();
            toggleDropDown($(this).parent());
          });
        });

        // Menu Show & Hide On Toggle Btn click
        $(opt.menuToggleBtn).each(function () {
          $(this).on("click", function () {
            menuToggle();
          });
        });

        // Hide Menu On outside click
        menu.on("click", function (e) {
          e.stopPropagation();
          menuToggle();
        });


        // Stop Hide full menu on menu click
        menu.on("click", function (e) {
          e.stopPropagation();
        });

        // Prevent submenu from hiding when clicking inside the menu
        menu.find("div").on("click", function (e) {
          e.stopPropagation();
        });
      });
    };

    $(".global-menu-wrapper").etmobilemenu();



    /*---------- Sticky fix ----------*/
    $(window).scroll(function () {
      var topPos = $(this).scrollTop();
      if (topPos > 10) {
        $('.sticky-wrapper').addClass('sticky');
        $('.category-menu').addClass('close-category');
      } else {
        $('.sticky-wrapper').removeClass('sticky')
        $('.category-menu').removeClass('close-category');
      }
    })

    // After
    $('.menu-expand').on('click', function (e) {
      e.preventDefault();
      $('.category-menu').toggleClass('open-category');
    });



    /*---------- Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {

      $($sideMunuOpen).on('click', function (e) {
        e.preventDefault();
        $($sideMenu).addClass($toggleCls);
      });
      $($sideMenu).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls)
      });
      var sideMenuChild = $sideMenu + ' > div';
      $(sideMenuChild).on('click', function (e) {
        e.stopPropagation();
        $($sideMenu).addClass($toggleCls)
      });

      $($sideMenuCls).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $($sideMenu).removeClass($toggleCls);
      });
    };


    popupSideMenu('.sidemenu-cart', '.sideMenuToggler', '.sideMenuCls', 'show');
    popupSideMenu('.sidemenu-info', '.sideMenuInfo', '.sideMenuCls', 'show');


    /*-----------------------------------
          Wow Animation 
        -----------------------------------*/
    new WOW().init();

    /*-----------------------------------
         Counterup 
       -----------------------------------*/
	$('.counters-item').counterUp({
		delay: 10,
		time: 1000
	});
	
    /*-----------------------------------
          Set Background Image & Mask   
        -----------------------------------*/
    if ($("[data-bg-src]").length > 0) {
      $("[data-bg-src]").each(function () {
        var src = $(this).attr("data-bg-src");
        $(this).css("background-image", "url(" + src + ")");
        $(this).removeAttr("data-bg-src").addClass("background-image");
      });
    }

    if ($("[data-mask-src]").length > 0) {
      $("[data-mask-src]").each(function () {
        var mask = $(this).attr("data-mask-src");
        $(this).css({
          "mask-image": "url(" + mask + ")",
          "-webkit-mask-image": "url(" + mask + ")",
        });
        $(this).addClass("bg-mask");
        $(this).removeAttr("data-mask-src");
      });
    }

    /*-----------------------------------
          Back to top    
        -----------------------------------*/
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });

    $(document).on("click", "#back-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });



    /*-----------------------------------
          MagnificPopup  view    
        -----------------------------------*/
    $(".popup-video").magnificPopup({
      type: "iframe",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    });

    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });


    /*-----------------------------------
         Text Splitting
      -----------------------------------*/
    Splitting();




    /*-----------------------------------
     Slider
     -----------------------------------*/

    //  Slider Animation 
    function applyAnimationProperties() {
      $("[data-ani]").each(function () {
        var animationClass = $(this).data("ani");
        $(this).addClass(animationClass);
      });

      $("[data-ani-delay]").each(function () {
        var delay = $(this).data("ani-delay");
        $(this).css("animation-delay", delay);
      });
    }

    // Call the animation properties function
    applyAnimationProperties();

    // Blog Slider
    var blogSlider = new Swiper('.blog1-slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".slider-nav-area .swiper-next",
        prevEl: ".slider-nav-area .swiper-prev",
      }
    });


    // Testimonial Slider
    var testimonialSlider = new Swiper('.testimonial2-slider', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 24,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".slider-nav-area .swiper-next",
        prevEl: ".slider-nav-area .swiper-prev",
      }
    });


    // Brand Slider
    var brandSlider = new Swiper('.brand2-slider', {
      loop: true,
      slidesPerView: 6,
      spaceBetween: 24,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });



    // Testimonial Slider 
    var testimonialSlider = new Swiper('.testimonial1-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      navigation: {
        nextEl: ".slider-nav-area .swiper-next",
        prevEl: ".slider-nav-area .swiper-prev",
      }
    });


    // Banner Page Number Slider Style 
    var oneGridBannerSlider = new Swiper('.one-grid-banner-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: true,
      centeredSlides: true,
      speed: 2000,
      effect: "fade",
      navigation: {
        nextEl: ".slider-nav-area .swiper-next",
        prevEl: ".slider-nav-area .swiper-prev",
      }
    });

    // Search Overly 
    $(".others-options .search-box").on("click", function () { $(".search-overlay").toggleClass("search-overlay-active"); });
    $(".search-overlay-close").on("click", function () { $(".search-overlay").removeClass("search-overlay-active"); });






  }); // End Document Ready Function




  /*-----------------------------------
        Preloader   
    -----------------------------------*/

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery); // End jQuery

