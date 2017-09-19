jQuery(document).ready(function($){
	$('.nav_button__hidden').on('click', function(){
		$(this).next().toggle();
	});


	$('.slider_block').slick({
		infinite: true,
		speed: 300,
		dots: true,
		// slidesToShow: 3,
		// centerMode: true,
		variableWidth: true
	//   responsive: [
	//     {
	//       breakpoint: 1024,
	//       settings: {
	//         slidesToShow: 3,
	//         slidesToScroll: 3,
	//         infinite: true,
	//         dots: true
	//       }
	//     },
	//     {
	//       breakpoint: 600,
	//       settings: {
	//         slidesToShow: 2,
	//         slidesToScroll: 2
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         slidesToShow: 1,
	//         slidesToScroll: 1
	//       }
	//     }
	//     You can unslick at a given breakpoint now by adding:
	//     settings: "unslick"
	//     instead of a settings object
	//   ]
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
});

