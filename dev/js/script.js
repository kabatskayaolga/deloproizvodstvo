
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
      value: 2,
      slide: function( event, ui ) {
      	
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
	  

	    $( ".calc_block input" ).change(function(){
	    	 calc(this);
	    	 
	    	
	    });

	if($('body').hasClass('single')){
		
	

	$(".ui-slider-range").append("<div class='quantity_people__sale' style=''>скидка 10%</div>");
	if(+$('.num-days').text() >= 2){
		$('[for="advanced_training"]').hide();
	};

	 $(".anchor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - $('header').height();
        $('body,html').animate({scrollTop: top}, 700);
    });






var oldPrice = parseInt($( ".old_price__rub").text());
var numberPeople = 1;

function calc(elem){

	var counter = 0;

	if($(elem).attr('name') == 'quantity_people' || 
		$(elem).attr('name') == 'quantity_people_more'){
		numberPeople = $(elem).val();

	} if($(elem).attr('name') == 'date'){
		var date = $(elem).val();
		timeToSale(elem);
		console.log(date)

	} 
	else{
		console.log('не забудь что нужно хранить дату')
	}
	// Цена учитывая количество людей
	var priceWithNumberPeople = oldPrice * numberPeople;
	// Цена учитывая количество людей + включены ли обеды или нет
	var priceOfDinner = $('[name="dinner"]').prop( "checked" ) ? 500 * numberPeople * +$('.num-days').text() : 0;
	// Цена учитывая количество людей + Курс в формате повышения квалификации или нет
	var priceOfAdvancedTraining = $('[name="advanced_training"]').prop( "checked" ) ? 3500 * numberPeople : 0;

	counter = $('[name="payment"]').prop( "checked" ) & numberPeople > 1 ? 20 : 
			  $('[name="payment"]').prop( "checked" ) & numberPeople == 1 ? 10 :
			  $('[name="payment"]').prop( "checked" ) == false & numberPeople > 1 ? 10 : 0 ;

	// Итоговая цена без скидки
	var newPrice = priceWithNumberPeople + priceOfDinner + priceOfAdvancedTraining;

	// Итоговая цена с учетом скидки
	var newPriceWithQuantuty = newPrice - ((priceWithNumberPeople/100) * counter)

	// console.log(priceWithNumberPeople, priceOfDinner, priceOfAdvancedTraining, counter);



	// Выводим новые цены
	$( ".old_price__rub").text(newPrice + ' руб');
	$( ".new_price__rub").text(newPriceWithQuantuty + ' руб');
	$('.quantity_people_span').text(numberPeople);
	$('.quantity_days').text(+$('.num-days').text());
	$('.quantity_days_span').text(date);
	$('.price_span').text(newPriceWithQuantuty + ' руб');


}

$('.quantity_days_span').text($('[name="date"][checked]').val());
$('.price_span').text($( ".new_price__rub").text());
$('.name_of_cource_span').text('«'+ $( ".name_of_cource").text()+ '»');
// Выбранная дата по умолчанию
var elActiveDate = '#date1';

function timeToSale(el){

	// дата в виде строки
	var ts = $(el).val().substring(6,10) + ' ' +
 		  $(el).val().substring(3,5) + ' ' +
 		  $(el).val().substring(0,2);
 	
	var timeForSaleNoFormat = moment(ts, "YYYY MM DD").add(-1, 'months');
	var timeForSale = moment(ts, "YYYY MM DD").add(-1, 'months').format('LL');
	// moment().isBefore(timeForSale);
	if(moment().isBefore(timeForSaleNoFormat)) {
		$('[for="payment"').show();
		$('.time_for_sale').text(timeForSale);

	} else{
		$('[name="payment"').prop("checked", false);
		$('[for="payment"').hide();
	}
	
}
timeToSale(elActiveDate);
calc( ".quantity_people__size" );



// MODAL OPEN


$('.open_modal').click(function(e) {
	e.preventDefault();

	var modalId = $(this).attr('href');
    $(modalId).css('display', 'flex');

});

$('.close').click(function() {
   $('.modal').css('display', 'none');

});

window.onclick = function(event) {
	
    if ($(event.target).hasClass('modal')) {
        $('.modal').css('display', 'none');
    }
}


$( ".form_modal .toggleItems" ).change(function(){
	if($(this).hasClass('toggleItems') & 
		$(this).prop( "checked" )){
		if ($(this).attr('id') == 'typeOfCourse1') {

			$('#status1').prop( "checked", true );

		} else {}
		$('.open_block').removeClass('active');
		var attrId = $(this).attr('id');
		$('.' + attrId).addClass('active');
	}
});
}
});