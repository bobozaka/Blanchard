$(document).ready(function() {
    $('.header__search-button').click(function(event) {
      $('.header__search-button,.header__search-form,.header__search-mobile,.header__search-disable').toggleClass('active');
      $('.header__logo,.header__burger').toggleClass('hide');
    });
  });