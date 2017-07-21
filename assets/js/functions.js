$(document).ready(function(){
  customcarousel();
  scrollAnimate();
  setPopOver();

});

function setPopOver() {
  $("[rel='popover']").popover({
    trigger : 'focus'
    });
}

function scrollAnimate() {
  window.sr = ScrollReveal();
  sr.reveal('.wrap-table', { duration: 1500, distance: '100px', origin: 'top' });
  sr.reveal('.wrap-owl-carousel', { duration: 1500, distance: '100px' });
  sr.reveal('.table-price-1', { duration: 1500, distance: '100px', origin: 'left' });
  sr.reveal('.table-price-2', { duration: 1500, distance: '100px', origin: 'top' });
  sr.reveal('.table-price-3', { duration: 1500, distance: '100px', origin: 'right' });
  sr.reveal('.owl-carousel', { duration: 1500, distance: '100px'});

  // Index Page
  sr.reveal('.wrap-rent', { duration: 1500, distance: '50px' });
  sr.reveal('section.index-contact .col-sm-6:first-child', { duration: 1500, distance: '200px', origin: 'left' });
  sr.reveal('.left-mes', { duration: 1500, distance: '200px', origin: 'left' });
  sr.reveal('.wrap-video', { duration: 1500, distance: '100px'});

  // Service Page
  sr.reveal('section.service-sale .col-sm-6:first-child', { duration: 1500, distance: '200px', origin: 'left' });
  sr.reveal('.left-service-func', { duration: 1500, distance: '100px', origin: 'left'});

  // Contact Page
  sr.reveal('section.contact-us .col-sm-6:first-child', { duration: 1500, distance: '100px', origin: 'left'});
}

function customcarousel() {
  // Price Carousel
  $('.carousel-1').owlCarousel({
        items:1,
        loop:true,
        center:true,
        margin: 0,
        navText: ['<img class="left-arrow" src="assets/img/svg/right-chevron.svg" >','<img class="right-arrow" src="assets/img/svg/right-chevron.svg" >'],
        navElement: 'span',
        nav: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        animateIn: 'jackInTheBox',
    });
    // Index Carousel, Service Carousel
    $('.carousel-2, .carousel-4').owlCarousel({
      items: 4,
      loop: true,
      margin: 0,
      nav: true,
      navText: ['<img class="index-arrow index-left-arrow" src="assets/img/svg/arrow.svg" >','<img class="index-arrow index-right-arrow" src="assets/img/svg/arrow.svg" >'],
      responsive:{
        0:{
            items:1,
        },
        768:{
            margin: 20,
            items:2,
        },
        1000:{
            items:3,
            center: true,
        },
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
