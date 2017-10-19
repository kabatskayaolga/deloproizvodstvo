
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



	 $( ".quantity_people__range" ).slider({
      range: 'max',
      min: 1,
      max: 11,
      value: 1,
      slide: function( event, ui ) {
      	// console.log(event, ui);
      	
        if(ui.value >= 2){
        	if($('.quantity_people__sale').length > 0){
        	} else{
        		$(".ui-slider-range").append("<div class='quantity_people__sale' style=''>скидка 10%</div>");
        	}
	      } else{
	      	$('.quantity_people__sale').remove();
	      }
	      $( ".quantity_people__size" ).val(ui.value);
	      calc( ".quantity_people__size" );
        }
         
	    });
	    // 
	    // $( ".quantity_people__size" ).val( $( ".quantity_people__range" ).slider( "value" ) );
	    

	    $( ".calc_block input" ).change(function(){
	    	 calc(this);
	    	 
	    	
	    });


});

var oldPrice = parseInt($( ".old_price__rub").text());
var numberPeople = 1;

function calc(elem){

	var counter = 0;

	if($(elem).attr('name') == 'quantity_people' || 
		$(elem).attr('name') == 'quantity_people_more'){
		numberPeople = $(elem).val();

	} else{
		console.log('не забудь что нужно хранить дату')
	}
	// Цена учитывая количество людей
	var priceWithNumberPeople = oldPrice * numberPeople;
	// Цена учитывая количество людей + включены ли обеды или нет
	var priceOfDinner = $('[name="dinner"]').prop( "checked" ) ? 500 * numberPeople : 0;
	// Цена учитывая количество людей + Курс в формате повышения квалификации или нет
	var priceOfAdvancedTraining = $('[name="advanced_training"]').prop( "checked" ) ? 3500 * numberPeople : 0;

	counter = $('[name="payment"]').prop( "checked" ) & numberPeople > 1 ? 20 : 
			  $('[name="payment"]').prop( "checked" ) & numberPeople == 1 ? 10 :
			  $('[name="payment"]').prop( "checked" ) == false & numberPeople > 1 ? 10 : 0 ;

	// Итоговая цена без скидки
	var newPrice = priceWithNumberPeople + priceOfDinner + priceOfAdvancedTraining;

	// Итоговая цена с учетом скидки
	var newPriceWithQuantuty = newPrice - ((priceWithNumberPeople/100) * counter)

	console.log(priceWithNumberPeople, priceOfDinner, priceOfAdvancedTraining, counter);

	// Выводим новые цены
	$( ".old_price__rub").text(newPrice + ' руб');
	$( ".new_price__rub").text(newPriceWithQuantuty + ' руб');
	
}