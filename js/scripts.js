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
	$('.arrow-down').css({visibility: 'visible'});

	$('#main-menu, .arrow-down').on('click', function(event){
		if($(window).width() > 500){
			return;
		}
			$(this).find('.arrow-up').css({display: 'static'});
			$('#main-menu').animate({height: '135px'}, 300, function(){
			$(this).find('ul').css({visibility: 'visible', top: '-10px'});
			$(this).find('.arrow-down').css({visibility: 'hidden'});
		});

	});

	$('.collapse-menu, .arrow-up').on('click', function(event){

		$('#main-menu').find('ul').css({top: '3px'});
		// $('#main-menu > ul').find('.arrow-down').css({display: 'static', visibility: 'visible', 'background-color': 'black'});
		event.preventDefault();
		event.stopPropagation();
		$('#main-menu').find('ul').css({visibility: 'hidden'});
		$('#main-menu').animate({height: '23px'}, 200, function(){
			console.log("All right!");
		});
			
		$('.arrow-down').css({visibility: 'visible'});

	})


	$('#menu-portafolio').on('click', function(){
		toggleVisibility('.submenu');
	});
	// alert($(window).width());
	$(window).resize(function(){
		console.log($(this).width());
		if($(window).width() < 550){
			$('#main-menu').css('position', 'static');
			resize = false;
		}
		else if ($(window).width() >= 551){
			resize = true;
		}
		var preexistent_margin = $('#content').css('margin-top');

	});

	var preexistent_margin = $('#content').css('margin-top');

	$(window).scroll(function(){

		var screen_height = 0;
		var content_margin = 0;
		if($(window).width() < 480){
			screen_height = 100;
		}
		else if($(window).width() > 480){
			screen_height = 150;
		}
		if($(this).scrollTop() > screen_height){			
			$('#main-menu').css({position: 'fixed', top: '0', 'margin-left': '10%'});
			var main_menu_height = parseInt($('#main-menu').height()) + parseInt(preexistent_margin);// + preexistent_margin;//preexistent_margin;
			$('#content').css({'margin-top': main_menu_height});
			lockedMenu = true;
		}		

		if($(this).scrollTop() < screen_height && lockedMenu === true){
			$('#main-menu').css('position', 'relative');
			$('#content').css({'margin-top': preexistent_margin});
			console.log("scrollTop < 150");
			lockedMenu = false;
			console.log(lockedMenu);
			console.log($(this).scrollTop());
		}
	});


		function getParameterByName(name) {
    	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}

		function mailSent(){
			var sent = getParameterByName('email_sent');
			
			if(sent){
				alert("Gracias por ponerte en contacto, tendras respuesta en breve.");
			}
		}

	mailSent();
});

