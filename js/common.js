$(function() {

	$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
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

var purchasesToggle = document.querySelectorAll('.purchases');

function clicPurchasesToggle() {
    purchasesToggle[0].classList.toggle('active');
}

purchasesToggle[0].addEventListener('click', clicPurchasesToggle);