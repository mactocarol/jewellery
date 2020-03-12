(function($) {
	"use strict";
	//Accordion js
	$(".panel_heading a").on("click", function(e){
		e.preventDefault();
	});
	$(".active_data").show();
    $('.panel_heading').click(function (e){
		$(".panel_heading").removeClass("active_head");
		if($(this).next('.panel_content').css('display') != 'block'){
			$('.active_data').removeClass('active_data').slideUp(500);
			$(this).next('.panel_content').addClass('active_data').slideDown(500);
			$(this).addClass("active_head");
		} else {
			$('.active_data').removeClass('active_data').slideUp(500);
		}
	});
	//tabs Menu
	$('.tab_menu .tab_link').on('click', function(){
		$(".tab_content").removeClass("active");
		var tab_data = $(this).attr("data-tab");
		$('.tab_menu .tab_link').removeClass("active");
		$(this).addClass("active");
		$("#"+tab_data).addClass("active");
	});
	//Responsive Menu in mobile js
	$('.nav_toggle').on('click', function(){
		$(".navigation").toggleClass("menu_open");
		$(".navigation").slideToggle(300);
	});

	//Responsive Mobile Menu
	if ($(window).width () < 991){
		$(".navigation > ul > li> ul").parents("li").addClass("dropdown_toggle");
		$(".navigation > ul > li> ul > li > ul").parents("li").addClass("dropdown_toggle");
		$(".dropdown_toggle").append("<span class='caret_down'><i class='fa fa-angle-down'></i></span>");
		$(".navigation ul li").children(".caret_down").on("click",function(){
			$(this).toggleClass("caret_up");
			$(this).prev("ul").slideToggle();
			
			$(".caret_down").children("i").attr("class","fa fa-angle-down");
			$(".caret_down.caret_up").children("i").attr("class","fa fa-angle-up");
		});
	}
	else {
		
	}
	//Datepicker
	if($(".calendar_dv").length > 0){
		$( ".calendar_dv" ).datepicker({
		  dateFormat: "dd-mm-yy",
		  firstDay: 1,
		});
	}
	//bootsrape selectpicker
    if ($(".selectpicker").length > 0) {
      $('.selectpicker').selectpicker();
    }
	$(".dropdown_btn").on('click',function(){
		$(this).next(".dropdown_menu").slideToggle(300);
		$(".dropdown_btn").not(this).next().slideUp("slow");
	});
	//home slider
	if ($(".home_slider").length > 0) {
		$(".home_slider").owlCarousel({
			singleItem:true,
			items:1,
			loop:true,
			margin:0,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
		});
	}
	//Product carousel
	if ($(".product_carousel").length > 0) {
		$(".product_carousel").owlCarousel({
			mode:"fade",
			items:4,
			loop:true,
			margin:10,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
			responsive:{
				// breakpoint from 0 up
				0 : {
				   items:1
				},
				// breakpoint from 768 up
				768 : {
					items:2
				},
				// breakpoint from 992 up
				992 : {
					items:3
				},
				// breakpoint from 1199 up
				1199 : {
					items:4
				}
			}
		});
	}
	//Product carousel
	if ($(".brand_carousel").length > 0) {
		$(".brand_carousel").owlCarousel({
			mode:"fade",
			items:5,
			loop:true,
			margin:10,
			autoplay:false,
			autoplayTimeout:3000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:true,
			nav:false,
			responsive:{
				// breakpoint from 0 up
				0 : {
				   items:1
				},
				// breakpoint from 500 up
				375 : {
				   items:2
				},
				// breakpoint from 768 up
				500 : {
					items:3
				},
				// breakpoint from 992 up
				992 : {
					items:4
				},
				// breakpoint from 1199 up
				1199 : {
					items:5
				}
			}
		});
	}
	//Testimonial syncronize slider
	$(document).ready(function() {
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	  var slidesPerPage = 5; //globaly define number of elements per page
	  var syncedSecondary = true;
	  sync1.owlCarousel({
	    items : 1,
	    slideSpeed : 2000,
	    autoplay: false,
	    nav: false,
	    dots: false,
	    loop: false,
	    responsiveRefreshRate : 200,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	  }).on('changed.owl.carousel', syncPosition);

	  sync2
	    .on('initialized.owl.carousel', function () {
	      sync2.find(".owl-item").eq(0).addClass("current");
	    })
	    .owlCarousel({
	    items : slidesPerPage,
	    margin:5,
	    dots: false,
	    nav: false,
	    autoplay: true,
	    smartSpeed: 200,
	    slideSpeed : 500,
	    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	    responsiveRefreshRate : 100,
	    responsive:{
				// breakpoint from 0 up
				0 : {
				   items:1
				},
				// breakpoint from 0 up
				376 : {
				   items:2
				},
				// breakpoint from 600 up
				600 : {
				   items:3
				},
				// breakpoint from 768 up
				768 : {
					items:4
				},
				// breakpoint from 992 up
				992 : {
					items:5
				},
				// breakpoint from 1199 up
				1199 : {
					items:5
				}
			}
	  }).on('changed.owl.carousel', syncPosition2);

	  function syncPosition(el) {
	    //if you set loop to false, you have to restore this next line
	    //var current = el.item.index;
	    
	    //if you disable loop you have to comment this block
	    var count = el.item.count-1;
	    var current = Math.round(el.item.index - (el.item.count/2) - .5);
	    
	    if(current < 0) {
	      current = count;
	    }
	    if(current > count) {
	      current = 0;
	    }
	    
	    //end block

	    sync2
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = sync2.find('.owl-item.active').length - 1;
	    var start = sync2.find('.owl-item.active').first().index();
	    var end = sync2.find('.owl-item.active').last().index();
	    
	    if (current > end) {
	      sync2.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	      sync2.data('owl.carousel').to(current - onscreen, 100, true);
	    }
	  }
	  
	  function syncPosition2(el) {
	    if(syncedSecondary) {
	      var number = el.item.index;
	      sync1.data('owl.carousel').to(number, 100, true);
	    }
	  }
	  
	  sync2.on("click", ".owl-item", function(e){
	    e.preventDefault();
	    var number = $(this).index();
	    sync1.data('owl.carousel').to(number, 300, true);
	  });
	});
	//progressbar js
	$(window).on('load', function() {
	  if ($(window).width () > 991){
		var win_h = $(this).outerHeight();
		$(".slide_item_bg").css('height',win_h);
	   }
	});
	//Jqeury counter
	$('.number_counter').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'linear',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	// review scroll 
	$('.add_review_lnk').click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
	});
	// see more scroll
	$('.seemore_txt').click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
	});
	//product syncronize slider
	$(document).ready(function() {
	  var sync1 = $("#pro_sync1");
	  var sync2 = $("#pro_sync2");
	  var slidesPerPage = 4; //globaly define number of elements per page
	  var syncedSecondary = true;
	  sync1.owlCarousel({
	    items : 1,
	    slideSpeed : 2000,
	    autoplay: false,
	    nav: false,
	    dots: false,
	    loop: false,
	    responsiveRefreshRate : 200,
	    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
	  }).on('changed.owl.carousel', syncPosition);

	  sync2
	    .on('initialized.owl.carousel', function () {
	      sync2.find(".owl-item").eq(0).addClass("current");
	    })
	    .owlCarousel({
	    items : slidesPerPage,
	    margin:4,
	    dots: false,
	    nav: true,
	    navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
	    autoplay: true,
	    smartSpeed: 200,
	    slideSpeed : 500,
	    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	    responsiveRefreshRate : 100,
	    responsive:{
				// breakpoint from 0 up
				0 : {
				   items:2
				},
				// breakpoint from 0 up
				360 : {
				   items:3
				},
				768 : {
					items:4
				}
			}
	  }).on('changed.owl.carousel', syncPosition2);

	  function syncPosition(el) {
	    //if you set loop to false, you have to restore this next line
	    //var current = el.item.index;
	    
	    //if you disable loop you have to comment this block
	    var count = el.item.count-1;
	    var current = Math.round(el.item.index - (el.item.count/2) - .5);
	    
	    if(current < 0) {
	      current = count;
	    }
	    if(current > count) {
	      current = 0;
	    }
	    
	    //end block

	    sync2
	      .find(".owl-item")
	      .removeClass("current")
	      .eq(current)
	      .addClass("current");
	    var onscreen = sync2.find('.owl-item.active').length - 1;
	    var start = sync2.find('.owl-item.active').first().index();
	    var end = sync2.find('.owl-item.active').last().index();
	    
	    if (current > end) {
	      sync2.data('owl.carousel').to(current, 100, true);
	    }
	    if (current < start) {
	      sync2.data('owl.carousel').to(current - onscreen, 100, true);
	    }
	  }
	  
	  function syncPosition2(el) {
	    if(syncedSecondary) {
	      var number = el.item.index;
	      sync1.data('owl.carousel').to(number, 100, true);
	    }
	  }
	  
	  sync2.on("click", ".owl-item", function(e){
	    e.preventDefault();
	    var number = $(this).index();
	    sync1.data('owl.carousel').to(number, 300, true);
	  });
	});
	//payment radio check
	$('.payment_radio input').change(function(){
		if ($(".card_pay_input").is(':checked')) {
			$(".pay_card_form").slideDown(100);	
		}
		else{
			$(".pay_card_form").slideUp(100);
		}
	});
	//filter accordion
	$(".f_heading").on("click", function(){
		$(this).next(".filter_content").slideToggle(100);
	});
	//add class in crousel items 
	$(".test_items").on("click", function(){
		$(".test_items").removeClass("active_item");
		$(this).addClass("active_item");
	});
})(jQuery);