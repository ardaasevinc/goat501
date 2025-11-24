/*
  [JS Index]
  
  ---
  
  Template Name: Yesex - Creative One Page Portfolio Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. fadeIn
    2.1. fadeIn.element
    2.2. fadeIn.borders
  3. menu additional CLOSER
  4. menu
  5. owl carousel
    5.1. owl about carousel
    5.2. owl services carousel
    5.3. owl works carousel
	5.4. owl news carousel
  6. magnificPopup
    6.1. magnificPopup single
	6.2. magnificPopup gallery
  7. toggle contact content
    7.1. toggle contact content additional CLOSER
  8. instafeed
  9. toggle instagram feed content
    9.1. toggle instagram feed content additional CLOSER
  10. slick slider
    10.1. slick fullscreen slideshow ZOOM/FADE
  11. YouTube player
  12. contact form
  13. swiper slider
    13.1. swiper parallax slider
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
        // 2. fadeIn
        // 2.1. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(1200).css({
                display: "none"
            }).fadeIn(1200);
        }, 0);
        // 2.2. fadeIn.borders
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 800);
        setTimeout(function() {
            $(".border-bottom-menu, .border-bottom").removeClass("bottom-position");
        }, 800);
		setTimeout(function() {
            $(".left-element").removeClass("left-position");
        }, 800);
    });
	
    // 3. menu additional CLOSER
    $("#menu li a, #menu-mobile li a").on("click", function() {
        $(".panel-left-contact, .panel-right-contact, .panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("open");
        $(".panel-left-contact, .panel-right-contact, .panel-left-instagram-feed, .panel-right-instagram-feed").addClass("close");
    });
	
	// 4. menu
    $("#menu li a, #menu-mobile li a").on("click", function(e) {
        e.preventDefault();
        animateSlider(this.hash);
    });
    function animateSlider(hash) {
        if (!$("#containerOT div.open").length) {
            if (hash == "#about") {
                openPopup(hash);
            }
            if (hash == "#services") {
                openPopup(hash);
            }
            if (hash == "#works") {
                openPopup(hash);
            }
			if (hash == "#news") {
                openPopup(hash);
            }
            if (hash == "#arda") {
                openPopup(hash);
            }
        } else {
            if (hash == "#home") {
                openAndClose(hash);
				$("#overlay").fadeOut(600);
            }
            if (hash == "#about") {
                openAndClose(hash);
            }
            if (hash == "#services") {
                openAndClose(hash);
            }
            if (hash == "#works") {
                openAndClose(hash);
            }
			if (hash == "#news") {
                openAndClose(hash);
            }
            if (hash == "#arda") {
                openAndClose(hash);
            }
        }
    }
    function openPopup(hash) {
        $(hash + "-lifting").slideToggle().addClass("open");
		$("#overlay").fadeIn(600);
    }
    function openAndClose(hash) {
        if ($(hash + "-lifting").hasClass("open")) {
            $($(hash + "-lifting")).slideToggle().removeClass();
			$("#overlay").fadeOut(600);
        } else {
            $("#containerOT div.open").slideToggle().removeClass();
            $(hash + "-lifting").slideToggle().addClass("open");
        }
    }
	//
	$("#overlay").on("click", function() {
        $("#containerOT div.open").slideToggle().removeClass();
        $("#overlay").fadeOut(600);
            
    });
	
    // 5. owl carousel
    // 5.1. owl about carousel
    $("#about-carousel").owlCarousel({
        loop: true,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-about',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // 5.2. owl services carousel
    $("#services-carousel").owlCarousel({
        loop: true,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-services',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // 5.3. owl works carousel
    $("#works-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-works',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
	// 5.4. owl news carousel
    $("#news-carousel").owlCarousel({
        // loop: true,
		loop: false,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#arda-carousel").owlCarousel({
        // loop: true,
		loop: false,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
	
    // 6. magnificPopup
    // 6.1. magnificPopup single
    $(".popup-photo-single").magnificPopup({
        type: "image",
        gallery: {
            enabled: false
        },
        removalDelay: 100,
        mainClass: "mfp-fade"
    });
	// 6.2. magnificPopup gallery
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade"
            // fixedContentPos: false
        });
    });
	
    // 7. toggle contact content
    $(".toggle-contact-content").on("click", function() {
        if ($(".panel-left-contact, .panel-right-contact").hasClass("open")) {
            $(".panel-left-contact, .panel-right-contact").removeClass("open");
            $(".panel-left-contact, .panel-right-contact").addClass("close");
        } else {
            $(".panel-left-contact, .panel-right-contact").removeClass("close");
            $(".panel-left-contact, .panel-right-contact").addClass("open");
        }
    });
    // 7.1. toggle contact content additional CLOSER
    $(".toggle-contact-content").on("click", function() {
        $(".panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("open");
        $(".panel-left-instagram-feed, .panel-right-instagram-feed").addClass("close");
    });
	
    // 8. instafeed
    var userFeed = new Instafeed({
        get: "user",
        userId: "5975086331", // Instagram User ID
        accessToken: "5975086331.1677ed0.5c991b59366a426fadf3e868310cc56b", // Instagram Access Token
        limit: 10,
        resolution: "standard_resolution",
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    });
    userFeed.run();
	
    // 9. toggle instagram feed content
    $(".toggle-instagram-feed-content").on("click", function() {
        if ($(".panel-left-instagram-feed, .panel-right-instagram-feed").hasClass("open")) {
            $(".panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("open");
            $(".panel-left-instagram-feed, .panel-right-instagram-feed").addClass("close");
        } else {
            $(".panel-left-instagram-feed, .panel-right-instagram-feed").removeClass("close");
            $(".panel-left-instagram-feed, .panel-right-instagram-feed").addClass("open");
        }
    });
    // 9.1. toggle instagram feed content additional CLOSER
    $(".toggle-instagram-feed-content").on("click", function() {
        $(".panel-left-contact, .panel-right-contact").removeClass("open");
        $(".panel-left-contact, .panel-right-contact").addClass("close");
    });
	
	// 10. slick slider
    // 10.1. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
	// 11. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 12. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
	// 13. swiper slider
	// 13.1. swiper parallax slider
    var swiper = new Swiper(".parallax .swiper-container", {
        autoplay: true,
        speed: 800,
        parallax: true,
        mousewheelControl: false,
        keyboardControl: false,
        navigation: false,
        paginationClickable: true
    });
	
	
});