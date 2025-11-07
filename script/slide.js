$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        draggable: true,
        swipe: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('.slick-slider2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        draggable: true,
        swipe: true,
        arrows: false,
        dots: false,
         responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint:850,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});





function showTab(containerId, index) {
    var container = document.getElementById(containerId);
    var tabs = container.getElementsByClassName('tab');
    var tabPanes = container.getElementsByClassName('tab-pane');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        tabPanes[i].classList.remove('active');
    }

    tabs[index].classList.add('active');
    tabPanes[index].classList.add('active');
}

document.getElementById('defaultTab_tab1').click();
document.getElementById('defaultTab_tab2').click();
document.getElementById('defaultTab_tab3').click();
document.getElementById('defaultTab_tab4').click();
document.getElementById('defaultTab_tab5').click();
document.getElementById('defaultTab_tab6').click();
document.getElementById('defaultTab_tab7').click();
document.getElementById('defaultTab_tab8').click();
