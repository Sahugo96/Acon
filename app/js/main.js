$('.filter-title:not(.filter-title--price, .sort__btn)').on('click', function () {
  $(this).siblings().slideToggle();
  $(this).toggleClass('filter-title--active');
});

$('.sort__btn').on('click', function () {
  $(this).toggleClass('filter-title--active');
  $(this).next().slideToggle();
});

$('.sort__elem').on('click', function () {
  $('.sort__btn').toggleClass('filter-title--active');
  $('.sort__list').slideToggle();
  $('.sort__btn').text($(this).text());
});

$('.form-search__input').focus(function () {
  if($(window).width() > 1000) {
    $('.user-menu, .bars, .header__bottom').toggle();
    $('.header__results').slideToggle();
    $('.form-search').toggleClass('form-search--active');
    $('.header').toggleClass('header--active');
  } else {
    $('.header__results').slideToggle();
    $('.user-menu, .bars').toggle();
    $('.form-search').toggleClass('form-search--active');
    $('.header').toggleClass('header--active');
  }
});

$('.form-search__input').focusout(function () {
  if ($(window).width() > 1000) {
    $('.user-menu, .bars, .header__bottom').toggle();
    $('.header__results').slideToggle();
    $('.form-search').toggleClass('form-search--active');
    $('.header').toggleClass('header--active');
  } else {
    $('.header__results').slideToggle();
    $('.user-menu, .bars').toggle();
    $('.form-search').toggleClass('form-search--active');
    $('.header').toggleClass('header--active');
  }
});

$('.product-list__sort-btn').on('click', function () {
  $('.product-list__sort-btn').toggleClass('product-list__sort-btn--active');
  $('.product-list__wrapper').toggleClass('product-list__wrapper--active');
  $('.product-list__filters').slideToggle();
  if ($(window).width() < 1000) {
    $('.product-filters__btns').toggleClass('product-filters__btns--active');
  }
});

$('.price-filter__input').ionRangeSlider({
  type: "double",
  // prefix: "₽",
  step: 0.01,
  onStart: function (data) {
    $('.price-filter__from').text(data.from);
    $('.price-filter__to').text(data.to);
  },
  onChange: function (data) {
    $('.price-filter__from').text(data.from);
    $('.price-filter__to').text(data.to);
  },
});

$('.menu__btn').on('click', function () {
  $('.menu__items').slideToggle();
  $('.menu').toggleClass('menu--active');
  $('.user-menu, .header__form-search').toggle();
});

$('.menu__item-btn').on('click', function () {
  if (!$(this).hasClass('menu__item-btn--active')) {
    $('.menu__item-btn').removeClass('menu__item-btn--active');
    $(this).addClass('menu__item-btn--active');
  } else {
    $(this).removeClass('menu__item-btn--active');
  }
});

$('.menu__link').on('click', function () {
  if ($('.menu').hasClass('menu--active')) {
    $('.menu__item-btn').removeClass('menu__item-btn--active');
    $('.menu__items').slideToggle(300);
    $('.user-menu, .header__form-search').toggle();
    $('.menu').removeClass('menu--active');
  }
});

