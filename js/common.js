$(function() {

	$('.slider-1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

});

$(function() {

	$('.slider-2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        pagination : true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

});

$(function() {

	$('.slider-3').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

});

// var purchasesToggle = document.querySelectorAll('.purchases-toggle');
// console.log(purchasesToggle[0].classList);

// function clicPurchasesToggle() {
//     purchasesToggle[0].classList.toggle('active');
// }

// purchasesToggle[0].addEventListener('click', clicPurchasesToggle);

var purchases = document.querySelectorAll('.purchases');
var purchasesToggle = document.querySelectorAll('.purchases-toggle');

function clicPurchasesToggle() {
    purchases[0].classList.toggle('active');
}

purchasesToggle[0].addEventListener('click', clicPurchasesToggle);

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("li.sub-menu.active"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass('active') // скрываем его
		}
	});
});

$(document).on('click', function(e) {
    if ($(window).width() <= '991') {
        if (!$(e.target).closest(".menu-toggle").length) {
            $('nav').hide();
          }
        e.stopPropagation();
    }

  });



