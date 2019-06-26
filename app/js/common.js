$(function() {

		// Настройка mmenu 
	$('#my-menu').mmenu({
		extensions: [
								'theme-black',  // Темная тема
								'effect-menu-slide', // Эфект слайда
								'pagedim-black',	// Затемнение фона при открытие меню
								'position-right',	//Открывается с права
								'border-none'			// Убрал линии
								],

		navbar: {	// Добавляем в тайтл вместо стандартного Menu логотип
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
	smenaHamburgera.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	})
	smenaHamburgera.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});



	// Подключение owl.carousel

	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
					carouselService()
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		loop: true, //бесконечная прокрутка
		nav: true,	//стрелочки
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1 // на маленьких экранах будет 1 итем
			},
			800: {
				items: 2 // на средних экранах (от 800px) 2 итема
			},
			1100: {
				items: 3 // на больших экранах от 1100px 3 итема
			}
		}
	});


	// не понял, для чего эта функция, но после неё появляется картинка 
	// с услугами
	function carouselService() {
		$('.carousel-services-item').each(function() {
			let ths = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();
 					ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}; 
	carouselService();

	// Замена на спан в заголовках последнего слова
	$('.carousel-services-composition h3').each(function() {
		let ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));

	});

	/* подключаем equalHeights для изменения высоты блока, если вдруг
	будет не 3 услуги, а 4, то тогда всблоки будут не равны! */
	// Подключаем вконце после карусели, чтобы пересчёт был после её подключения
	function onResize() {
			$('.carousel-services-content').equalHeights();
	}onResize();
	 window.onresize = function() {onResize()};


});
