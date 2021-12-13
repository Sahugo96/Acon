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
  $('.product-list__filters').slideToggle();
});
  // $('.button-list').on('click', function () {
  //   $('.product-list__pagination').addClass('product-list__pagination--list');
  // });

  // $('.button-grid').on('click', function () {
  //   $('.product-list__pagination').removeClass('product-list__pagination--list');
  // });

  // $('.button-list').on('click', function () {
  //   $('.pagination').addClass('pagination--list');
  // });

  // $('.button-grid').on('click', function () {
  //   $('.pagination').removeClass('pagination--list');
  // });

  // $('.button-list').on('click', function () {
  //   $('.product-content__item').addClass('product-content__item--list');
  // });

  // $('.button-grid').on('click', function () {
  //   $('.product-content__item').removeClass('product-content__item--list');
  // });

  // $('.button-list').on('click', function () {
  //   $('.product-card').addClass('product-card--list');
  // });

  // $('.button-grid').on('click', function () {
  //   $('.product-card').removeClass('product-card--list');
  // });

  // $('.button-list').on('click', function () {
  //   $('.circle-btn--white').addClass('circle-btn--square');
  // });

  // $('.button-grid').on('click', function () {
  //   $('.circle-btn--white').removeClass('circle-btn--square');
  // });

  // $('.product-content__button').on('click', function () {
  //   $('.product-content__button').removeClass('product-content__button--active');
  //   $(this).addClass('product-content__button--active');
  // });


  // $('.pagination__link').on('click', function () {
  //   $('.pagination__link').removeClass('pagination__link--active');
  //   $(this).addClass('pagination__link--active');
  // });

  // $(".star").rateYo({
  //   starWidth: "12px",
  //   normalFill: "#d6d6d6",
  //   ratedFill: "#ffcc00",
  //   spacing: "6px",
  //   readOnly: true,
  // });

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
    $('.menu__list').toggleClass('menu__list--active');
  });

  var containerEl1 = document.querySelector('[data-ref="products__list"]');
  var containerEl2 = document.querySelector('[data-ref="design__list"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
