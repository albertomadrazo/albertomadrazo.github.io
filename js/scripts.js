function toggleVisibility(element){
	if($(element).css('visibility') === 'hidden'){
		$(element).css('visibility', 'visible');
	}
	else if($(element).css('visibility') === 'visible'){
		$(element).css('visibility', 'hidden');
	}
}

$(document).ready(function(){
	var lockedMenu = false;
	var resize = true;

	$('#menu-portafolio').on('click', function(){

		toggleVisibility('.submenu');
	});

	if($(window).width() < 550){
		resize = false;
	}
	else if ($(window).width() > 551){
		resize = true;
	}

	$(window).scroll(function(){
		if(resize === false){
			return;
		}
		console.log($(window).width());

		if($(this).scrollTop() > 200){
			$('#main-menu-container').css({position: 'fixed', top: '0'});
			lockedMenu = true;
		}		

		if($(this).scrollTop() < 200 && lockedMenu === true){
			$('#main-menu-container').css({position: 'relative', top:'53px'});

			lockedMenu = false;
		}
	});
});

