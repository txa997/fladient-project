/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";



// smoooth scroll activation start
const lenis = new Lenis({
	duration: 1.8,	
})


lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
});
gsap.ticker.lagSmoothing(0);


// preloader
document.addEventListener("DOMContentLoaded", function () {

	let preloader = document.querySelector("#preloader");

	window.addEventListener('load', function(){

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
			}, 1000 ) ;

		}

		// h1-start
		const fdh1 = gsap.timeline();
		fdh1.from(".fd-hero-1-slideup " , { stagger: .5,  y: 100 , duration:1,  opacity:0 , delay: 1.5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") })
		fdh1.from(".fd-hero-1-slideleft " , { stagger: .5,  x: -100 , duration:1,  opacity:0 ,   ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, "<.5")
		fdh1.from(".fd-hero-1-slideright " , { stagger: .5,  x: 100 , duration:1,  opacity:0 ,   ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, "<=")

		// h2-start
		const fdh2 = gsap.timeline();
		fdh2.from(".fd-hero-2-slidedown " , { stagger: .3,  y: 100 , duration:1,  opacity:0 , delay: 1,   ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, "<.5")
		fdh2.from(".fd-hero-2-slideleft " , { stagger: .3,  x: -100 , duration:1,  opacity:0 ,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, "<.5")
		fdh2.from(".fd-hero-2-slideright " , { stagger: .3,  x: 100 , duration:1,  opacity:0 , ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, "<.5")



	})

});

// sticky-header
function glystickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.txa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('txa_sticky');
      } else {
        $header.removeClass('txa_sticky');
        $header.removeClass('txa_sticky_show');
      }

      if ($header.hasClass('txa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('txa_sticky_show');
        } else {
          $header.removeClass('txa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

glystickyHeader();
  


// mobile-menu-start
jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


// search-popup-start
$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})



// mobile-menu-toggle-start
gsap.registerPlugin(ScrollTrigger);
gsap.config({
	nullTargetWarn: false,
});
var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")
if (menuToggle2) {

	var menuBar = gsap.timeline();
	menuBar.reverse();
	var menubgline = gsap.timeline({ paused: true });
	
	menubgline.to('.mobile-menu' , {
		display: "block",
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-bg span' , {
		duration: 1,
		width: 0,
		stagger: 0.1,
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-logo' , {
		xPercent: -50,
		opacity: 0,
		ease: 'Expo.easeInOut',
		duration: 1,
	}, "<" );
	menubgline.from('.mobile-menu-close' , {
		duration: 1,
		xPercent: 50,
		rotate: 360,
		ease: 'Expo.easeInOut',
		opacity: 0,

	}, "<");
	menubgline.from('.mobile-main-navigation ' , {
		duration: .5,
		opacity: 0,
		y: 50,
	},"<.5");
	menubgline.from('.mobile-menu-search-bar' , {
		opacity: 0,
		y: 50,
	}, "<");

	menubgline.from('.mobile-menu-right' , {
		opacity: 0,
		visibility: "hidden",
		y: 50,
	});

	menubgline.from('.mobile-menu-socail-link' , {
		opacity: 0,
		x: 50,
	});


	
	menubgline.reverse();
	menuToggle.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	menuToggle2.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	
}

// title-animation
if($('.txaa-split-subtitle-1').length) {
	var st1 = $(".txaa-split-subtitle-1");
	if(st1.length == 0) return; gsap.registerPlugin(SplitText); st1.each(function(index, el) {
	
		el.split = new SplitText(el, { 
		type: "lines,words,chars",
		linesClass: "split-line"
		});
	
		gsap.set(el, { perspective: 400 });
	
			if( $(el).hasClass('txaa-ani-subtitle-1') ){
			gsap.set(el.split.words, {
				opacity: 1,
				y: "-150",
	
			});
		}
	
		el.anim = gsap.to(el.split.words, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
	
			x: "0",
			y: "0",
			opacity: 1,
			duration: .7,
			ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 "),
			stagger: 0.2,
			delay: 1
		});
	
	});
}

if($('.txaa-split-subtitle-2').length) {

	var st2 = $(".txaa-split-subtitle-2");

	if(st2.length == 0) return; gsap.registerPlugin(SplitText); st2.each(function(index, el) {
	
		el.split = new SplitText(el, { 
		type: "lines,words,chars",
		linesClass: "split-line"
		});
	
		gsap.set(el, { perspective: 400 });
	
			if( $(el).hasClass('txaa-ani-subtitle-2') ){
			gsap.set(el.split.words, {
				opacity: 1,
				y: "-100",
	
			});
		}
	
		el.anim = gsap.to(el.split.words, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
	
			x: "0",
			y: "0",
			opacity: 1,
			duration: .7,
			ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 "),
			stagger: 0.2,
		});
	
	});
}



if (window.innerWidth >= 991) {
	const composeTl =  gsap.timeline({
		scrollTrigger: {
			trigger: ".fd-benifit-workflow-area",
			start: "top 0%",
			end:'bottom 0%',
			scrub: 1,
			pinSpacing: true, 
			pin: true,
			toggleActions: "play pause reverse reset",
			markers: false,
		}
	});
	
	composeTl.to(".fd-benifit-1-content", {
		
		opacity: 0,
		y: "-100%",
		scale: 0.8,
		duration: 1,
	})
	
	composeTl.from(".fd-workflow-1-img-wrap", {
		opacity: 1,
		y: "100%",
		scale: 0.8,
		duration: 1,
	}, "<")
	
	
	
	composeTl.to(".fd-benifit-1-img-2", {
		opacity: 0,
		y: "-100%",
		scale: 0.8,
		duration: 1,
	})
	
	
	
	composeTl.from(".fd-workflow-1-content", {
		opacity: 1,
		y: "100%",
		scale: 0.8,
		duration: 1,
	}, "<")

}


const txaafadedown = gsap.utils.toArray('.txaafadedown');
txaafadedown.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ y: 100 , duration: 1, autoAlpha: 0, stagger: .5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, 
	{ y: 0 , duration: 1, autoAlpha: 1, stagger: .5, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ")  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		
		markers: false,

	});
});

const txaafadeleft = gsap.utils.toArray('.txaafadeleft');
txaafadeleft.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ x: -100 , duration: 1, autoAlpha: 0, stagger: .5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, 
	{ x: 0 , duration: 1, autoAlpha: 1, stagger: .5, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ")  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		
		markers: false,

	});
});

const txaafaderight = gsap.utils.toArray('.txaafaderight');
txaafaderight.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ x: 100 , duration: 1, autoAlpha: 0, stagger: .5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, 
	{ x: 0 , duration: 1, autoAlpha: 1, stagger: .5, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ")  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		
		markers: false,

	});
});

const txaaslideleft = gsap.utils.toArray('.txaaslideleft');
txaaslideleft.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ x: -200 , duration: 1,  stagger: .5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, 
	{ x: 0 , duration: 1,  stagger: .5, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ")  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		
		markers: false,

	});
});

const txaascale2 = gsap.utils.toArray('.txaascale2');
txaascale2.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scale: 2 , duration: 1,  stagger: .5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, 
	{ scale: 1 , duration: 1,  stagger: .5, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ")  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 85%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		
		markers: false,

	});
});

const txaascale0 = gsap.utils.toArray('.txaascale0');
txaascale0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scale: 0 , duration: 1,  stagger: .5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, 
	{ scale: 1 , duration: 1,  stagger: .5, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ")  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 85%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		
		markers: false,

	});
});

const txaasx0 = gsap.utils.toArray('.txaasx0');
txaasx0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scaleX: 0 , duration: 3,  stagger: .5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, 
	{ scaleX: 1 , duration: 3,  stagger: .5, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ")  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 85%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		
		markers: false,

	});
});

const txaay0 = gsap.utils.toArray('.txaay0');
txaay0.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ scaleY: 0 , duration: 3,  stagger: .5,  ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ") }, 
	{ scaleY: 1 , duration: 3,  stagger: .5, ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.447,0.77 0.621,1 0.646,1.032 0.818,1.001 1,1 ")  });

	ScrollTrigger.create({
		trigger: box,
		start: "top 85%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		
		markers: false,

	});
});


// overview-1
gsap.utils.toArray('.fd-overview-1-img').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 85%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { x: 100 , y: 100 , scale: .5 }, {opacity: 1, duration: 1, immediateRender: false})
})





// course-1-slider
if($('.fd-feature-1-active').length) {
	let slider = new Swiper('.fd-feature-1-active', {
		loop: true,
		spaceBetween: 20,
		direction: "vertical",
		mousewheel: true,
		speed: 2000,
		autoplay: {
			delay: 5000,
		},

		pagination: {
		  el: ".fd-feature-1-pagination",
		  clickable: true,
		},
	
	});
}
 

// course-1-slider
if($('.fd-testionial-2-active').length) {
	let slider = new Swiper('.fd-testionial-2-active', {
		loop: true,
		spaceBetween: 30,
		speed: 1000,
		autoplay: {
			delay: 3000,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
}
 

// testimonial-3-slider
if($('.fd-testimonial-3-active').length) {
	let slider = new Swiper('.fd-testimonial-3-active', {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		autoplay: {
			delay: 4000,
		},


		navigation: {
			nextEl: ".testimonial_3_next",
			prevEl: ".testimonial_3_prev",
		},

	});
}
 
  


/* 
 	price-1-active-class
*/
$(".kd-price-1-table-feature-item").on("click", function(){
	var current_class = document.getElementsByClassName("kd-price-1-table-feature-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

/*
	marquee-activiton
*/
$('.js-marquee-wrapper').marquee({
	speed: 50,
	gap: 12,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: true,
	startVisible:true,
})

$('.js-marquee-wrapper-2').marquee({
	speed: 50,
	gap: 12,
	delayBeforeStart: 0,
	direction: 'right',
	duplicated: true,
	pauseOnHover: true,
	startVisible:true,
})

/*
	mouse-move-animation
*/

document.addEventListener("mousemove" , parallax);
function parallax(e){

	document.querySelectorAll(".txa-mm-elm").forEach(function(move){

		var moving_value = move.getAttribute("data-value");
		var x = (e.clientX * moving_value) /250;
		var y = (e.clientY * moving_value) /250;

		move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
	})

}


// bootstrap-toltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* back-to-top */
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});


/* counter */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

// wow-splitting-text
Splitting();

// wow-activation
if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};


/*
popup-video-activition
====start====
*/

if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}


/*
popup-img-activition
====start====
*/

if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

/*
popup-img-activition
====start====
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}

// parallax-img
$('.parallax-img').parallaxie({  
	speed: 0.5,    
});




})(jQuery);