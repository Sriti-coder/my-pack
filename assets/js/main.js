(function ($) {
	"use strict";

    jQuery(document).ready(function($){


              
        $(".hero-slider-active").owlCarousel({
            items:1,
            nav:true,
            navText: ['<i class="fal fa-chevron-left"></i>', '<i class="fal fa-chevron-right"></i>'],
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                   
                },
                768:{
                    items:1,
                   
                },
                1000:{
                    items:1,
                   
                }
            }
            
          
        });




    });


    jQuery(window).load(function(){


    });


}(jQuery));	