$(document).ready(function(){
  customcarousel();
  scrollAnimate();
$("[rel='popover']").popover();
});

function scrollAnimate() {
  window.sr = ScrollReveal();
  sr.reveal('.table-1', { duration: 1500, distance: '200px', origin: 'left' });
  sr.reveal('.table-2', { duration: 1500, distance: '200px', origin: 'top' });
  sr.reveal('.table-3', { duration: 1500, distance: '200px', origin: 'right' });
  sr.reveal('.wrap-owl-carousel', { duration: 1500, distance: '100px' });
}

function customcarousel() {
  // Price Carousel
  $('.carousel-1').owlCarousel({
        items:1,
        loop:false,
        center:true,
        margin:20,
        navText: ['<img class="left-arrow" src="assets/img/svg/right-chevron.svg" >','<img class="right-arrow" src="assets/img/svg/right-chevron.svg" >'],
        navElement: 'span',
        nav: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        animateIn: 'jackInTheBox',
    });
    // Index Carousel
    $('.carousel-2').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      navText: ['<img class="index-arrow index-left-arrow" src="assets/img/svg/arrow.svg" >','<img class="index-arrow index-right-arrow" src="assets/img/svg/arrow.svg" >'],
      navElement: 'span',
      margin: 20,
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1000:{
            items:3,
            nav: true
        }
      }
    });
    // Service Exam 1 Carousel
    $('.carousel-3').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      navText: ['<img class="index-arrow index-left-arrow" src="assets/img/svg/arrow.svg" >','<img class="index-arrow index-right-arrow" src="assets/img/svg/arrow.svg" >'],
      navElement: 'span',
      margin: 20,
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1000:{
            items:3,
            nav: true
        }
      }
    });
    // Service Carousel
    $('.carousel-4').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      navText: ['<img class="index-arrow index-left-arrow" src="assets/img/svg/arrow.svg" >','<img class="index-arrow index-right-arrow" src="assets/img/svg/arrow.svg" >'],
      margin: 20,
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1000:{
            items:3,
            nav: true
        }
      }
    });
}

$(window).scroll(function(){
  scrollNav();
})

function scrollNav() {
  var wScroll = $(this).scrollTop(),
      navbar = $('.navbar'),
      mainNav = $('.main-nav');

  if(wScroll > 50) {
    $(navbar).addClass('changeNav');
    $(mainNav).addClass('changeBG');
  } else {
    $(navbar).removeClass('changeNav');
    $(mainNav).removeClass('changeBG');
  }
}
