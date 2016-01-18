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
	// alert($(window).width());
	$(window).resize(function(){

		console.log($(this).width());
		if($(window).width() < 550){
			$('#main-menu').css('position', 'relative');
			resize = false;
		}
		else if ($(window).width() >= 551){
			resize = true;
		}
	});

	$(window).scroll(function(){

		console.log($(this).scrollTop());
		if(resize === false){
			console.log("no resize");
			return;
		}
		console.log($(window).width());

		if($(this).scrollTop() > 145){
			$('#main-menu').css({position: 'fixed', top: '0'});
			lockedMenu = true;
		}		

		if($(this).scrollTop() < 145 && lockedMenu === true){
			$('#main-menu').css({position: 'relative', top:'20px'});

			lockedMenu = false;
		}
	});
});

