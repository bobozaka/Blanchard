    jQuery(($) => {
$('.header__select').on('click', '.header__select-head', function () {
if ($(this).hasClass('open')) {
    $(this).removeClass('open');
    $(this).next().fadeOut();
} else {
    $('.header__select-head').removeClass('open');
    $('.header__select-dropdown').fadeOut();
    $(this).addClass('open');
    $(this).next().fadeIn();
}
});

$(document).click(function (e) {
if (!$(e.target).closest('.header__select').length) {
    $('.header__select-link').removeClass('open');
    $('.header__select-dropdown').fadeOut();
}
});
});
