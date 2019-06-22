$(function() {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 
								'theme-black',  // Темная тема
								'effect-menu-slide', // Эфект слайда
								'pagedim-black',	// Затемнение фона при открытие меню
								'position-right',	//Открывается с права
								'border-none'			// Убрал линии
								],

		navbar: {
			title: '<img src="img/logo-1.svg" alt="салон красоты">'
		},

		classNames: {
			vertical: 'expand', // Добавить класс на подменю .Vertical
												// expand делает выезд подменю вертикально

		},
	});

	// Объявляем переменную для гамбургера 
	let smenaHamburgera = $('#my-menu').data('mmenu');

	// Когда гамбургер открыт, сменяем иконку на крестик
	smenaHamburgera.bind('openPanel:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('openPanel:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	
});
