
jQuery(document).ready(function($){
	var mwi = $('.flex-column__event').css('max-width');

	function mWidth(){
		$('.flex-column__event').css('max-width' , mwi );

		var wi = $('.flex-column__event').width();
		$('.flex-column__event').css('max-width' , wi );
	}


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

	$('.lecturers_slider_home').slick({
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

	$('.lecturers_slider__event').slick({
		// infinite: true,
		speed: 300,
		dots: true,
		// slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		// adaptiveHeight: true,
		// responsive: [
		//     {
		//       breakpoint: 1235,
		//       settings: {
		//         slidesToShow: 3,
		//       }
		//     },
		//     // {
		//     //   breakpoint: 840,
		//     //   settings: {
		//     //     slidesToShow: 2,
		//     //   }
		//     // },
		//     {
		//       breakpoint: 840,
		//       settings: {
		//         slidesToShow: 1,
		//         slidesToScroll: 1
		//       }
		//     }
		 
		//   ]
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


	$('.partners_slider, .client_slider').slick({
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

	

	mWidth();
	

	$( window ).resize(function() {
	   mWidth();
	});


	$('.tabs-links a').click(function(e){
		e.preventDefault();
		$('.tabs-links a, .tab_wrapper > div').removeClass('active');

		var tabId = $(this).attr('href');
		$(this).addClass('active');
		$(tabId).addClass('active');
	});
	$('.more').click(function(e){
		e.preventDefault();
		$('#program ul').toggle();
		if($('.more').html() == 'Подробнее'){
			$('.more').html('Скрыть').addClass('up');
			// $('.main-information').hide();
		} else{
			$('.more').html('Подробнее').removeClass('up');
			// $('.main-information').show();
		}
		
	});

});


