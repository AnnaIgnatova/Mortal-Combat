$(document).ready(function () {
    const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
        loop: true,
        slidesPerView: 6,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 6,
            }
        }

    });
    const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
        loop: true,
        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
    $("#review-1").on('click', function() {

    $.fancybox.open([
        {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
            caption : 'First caption',
            thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
        },
        {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
            caption : 'Second caption',
            thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
        }
    ], {
        loop : true,
        thumbs : {
            autoStart : true
        }
    });

    });
    
    let conutBlocks = document.querySelectorAll(".counter-group");

    for (let i = 0; i < conutBlocks.length; i++) {
        conutBlocks[i].onclick = function() {
            let countPlus = this.querySelector('.plus');
            let countMinus = this.querySelector('.minus');
            let countInput = this.querySelector('.counter-input');
            let cardButton = this.querySelector('.card-button');

            countPlus.onclick = function() {
                countInput.value++;
            }

            countMinus.onclick = function() {
                if (countInput.value == 0) return 0;
                else countInput.value--;
            }
            
            cardButton.onclick = function() {
                console.log(1);
                countInput.value = 1;
            }
        }
    }

    let moreButton = document.querySelector(".more");

    moreButton.onclick = function(event) {
        event.preventDefault();
        $('.hide').css('display', 'block');
        $('.more').css('display', 'none');
    }

    


});