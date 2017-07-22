$(document).ready(function(){
  customcarousel();
  scrollAnimate();
  setPopOver();
  clickTab();

});

function clickTab() {
  var linkTab = $('section.service-func li a'),
      linkTabCarousel = $('.direction .url'),
      linkTabService = $('section.service-func-service .service-func-tab li a');

  // Service Func
  $(linkTab).on('click', function(){
    $(this).addClass('active');
    $(this).parent().siblings().find('a').removeClass('active');
  })

  // Price Carousel
  $(linkTabCarousel).on('click', function(){
    $(this).addClass('open');
    $(this).parent().siblings().find('.url').removeClass('open');
  })

  // Service Func Service
  function stuff() {
    $(linkTabService).focusin(function(){
      $(this).addClass('index');
    })
    $(linkTabService).focusout(function(){
      $(this).removeClass('index');
    })
  }

  function stuff2() {
    $(linkTabService).focusin(function(){
      $(this).addClass('index-open');
    })
    $(linkTabService).focusout(function(){
      $(this).removeClass('index-open');
    })
  }

  function stuff3() {
    $(linkTabService).removeClass('index');
    $(linkTabService).focusin(function(){
      $(this).removeClass('index');
    })
    $(linkTabService).focusout(function(){
      $(this).removeClass('index');
    })
    $(linkTabService).removeClass('index-open');
  }

  if($(window).width() > 990) {
    stuff();
  } else {
    stuff2();
  }

  $(window).resize(function(){

    if($(window).width() > 990) {
      stuff();
    } else {
      stuff3();
    }
  })

}

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
  sr.reveal('.index-stuff .wrap-customer', { duration: 1500, distance: '50px' });
  sr.reveal('.wrap-rent', { duration: 1500, distance: '50px' });
  sr.reveal('section.index-contact .col-sm-6:first-child', { duration: 1500, distance: '200px', origin: 'left' });
  sr.reveal('.service-stuff-1', { duration: 1500, distance: '200px', origin: 'right' });
  sr.reveal('.contact-img', { duration: 1500, distance: '200px', origin: 'right' });
  sr.reveal('.left-mes', { duration: 1500, distance: '200px', origin: 'left' });
  sr.reveal('.wrap-video', { duration: 1500, distance: '100px'});

  // Service Page
  sr.reveal('section.service-sale .col-sm-6:first-child', { duration: 1500, distance: '200px', origin: 'left' });
  sr.reveal('.left-service-func', { duration: 1500, distance: '100px', origin: 'left'});
  sr.reveal('.service-exam .wrap-customer', { duration: 1500, distance: '50px'});
  sr.reveal('.service-func-service .wrap-customer', { duration: 1500, distance: '50px'});

  // Contact Page
  sr.reveal('section.contact-us .col-sm-6:first-child', { duration: 1500, distance: '100px', origin: 'left'});
  sr.reveal('section.contact-us .contact-showcase', { duration: 1500, distance: '200px', origin: 'right' });
}

function customcarousel() {
  // Price Carousel
  $('.carousel-1').owlCarousel({
        items:1,
        loop:true,
        center:true,
        margin: 0,
        navText: ['<span class="navi-btn pre-btn"> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>','<span class="navi-btn pre-btn"> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'],
        navElement: 'span',
        nav: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
    });
    // Index Carousel, Service Carousel
    $('.carousel-2, .carousel-4').owlCarousel({
      items: 4,
      loop: true,
      margin: 0,
      nav: true,
      navElement: 'span',
      navText: ['<div class="box-icon box-left"><i class="fa fa-angle-left navPage left-nav" aria-hidden="true"></i></div>','<div class="box-icon box-right"><i class="fa fa-angle-right navPage right-nav" aria-hidden="true"></i></div>'],
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
      navText: ['<div class="box-icon box-left"><i class="fa fa-angle-left navPage left-nav" aria-hidden="true"></i></div>','<div class="box-icon box-right"><i class="fa fa-angle-right navPage right-nav" aria-hidden="true"></i></div>'],
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
