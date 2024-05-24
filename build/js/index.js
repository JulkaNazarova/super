// определяем и передаем значения переменных js->css
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.documentElement.style.setProperty('--js-header-height', headerHeight + "px");


jQuery(document).ready(function () {

  // мобильное меню
  $('.menu-humb').on('click', function () {
    $(this).toggleClass('active');
    $('.menu-mob').toggleClass('active');
    $('.header__wrap').toggleClass('menu_active');
  });

  // хедер при скролле
  $(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled > 80) {
      $(".header").addClass("header-active");
    }
    if (scrolled <= 80) {
      $(".header").removeClass("header-active");
    }
  });

  $('.header-nav__down').on('click', function () {
    $(this).find('.header-nav__submenu').slideDown();
  });

  const swiperBanner = new Swiper(".banner-slider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  const swiperCatalog = new Swiper(".catalog-slider", {
    slidesPerView: 2.5,
    breakpoints: {
      600: {
        slidesPerView: 3.5
      },
      991: {
        slidesPerView: 5
      }
    }
  });

  const swiperProducts = new Swiper(".products-slider", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }
  });

  const swiperPartners = new Swiper(".partners-slider", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 50,
    loop: true,
    freeMode: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      600: {
        spaceBetween: 70,
      },
      991: {
        spaceBetween: 175,
      }
    }
    
  });

  // табы
  $('._js-tabs-title').on('click', function () {
    let tabAttr = $(this).attr('data-tab'),
      tabInfo = $('._js-tabs-info[data-tab= \'' + tabAttr + '\']');
    $(this).addClass('active').siblings().removeClass('active');
    tabInfo.addClass('active').siblings().removeClass('active');
  });

  // табы с картами
  $('.maps-tab').on('click', function () {
    let tabAttr = $(this).attr('data-tab'),
      tabInfo = $('.maps-block[data-tab= \'' + tabAttr + '\']');
    $(this).addClass('active').siblings().removeClass('active');
    tabInfo.addClass('active').siblings().removeClass('active');
  });

  // mask phone
  $(function () {
    $(".input-phone").mask("+7 (999) 999 - 99 - 99");
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".header-nav__down").length) {
      $(this).find('.header-nav__submenu').slideUp();
    }
    e.stopPropagation();
  });

   
});





