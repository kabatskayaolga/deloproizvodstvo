jQuery(document).ready(function($){
	$('.nav_button__hidden').on('click', function(){
		$(this).next().toggle();
	});


	$('.about_slider').slick({
		infinite: true,
		speed: 300,
		dots: true,
		// slidesToShow: 3,
		// centerMode: true,
		variableWidth: true
	
	}).magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	$('.lecturers_slider').slick({
		infinite: true,
		speed: 300,
		dots: true,
		slidesToShow: 5,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	})
});

