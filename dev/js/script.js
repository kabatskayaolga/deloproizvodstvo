jQuery(document).ready(function($){
	$('.nav_button__hidden').on('click', function(){
		$(this).next().toggle();
	});
});

