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
		adaptiveHeight: true,
		responsive: [
		    {
		      breakpoint: 1235,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    // {
		    //   breakpoint: 840,
		    //   settings: {
		    //     slidesToShow: 2,
		    //   }
		    // },
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		 
		  ]
	});


	$('.lessons_slider').slick({
		infinite: true,
		speed: 300,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		adaptiveHeight: true		
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



	$('.reviews_slider').slick({
		infinite: true,
		speed: 300,
		dots: false,
		slidesToShow: 6,
		// slidesToShow: 1,	
		responsive: [
		    {
		      breakpoint: 1235,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2,
		      }
		    }
		 
		  ]	
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


	$('.partners_slider').slick({
		infinite: true,
		speed: 300,
		dots: false,
		slidesToShow: 8,
		responsive: [
		    {
		      breakpoint: 1235,
		      settings: {
		        slidesToShow: 6,
		      }
		    },
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 4,
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		 
		  ]
		// slidesToShow: 1,		
	});
});

