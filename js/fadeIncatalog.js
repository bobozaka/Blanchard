(function ($) {

	$('.section-catalog__button').on('click touch', function (event) {
		event.preventDefault();
		var id = $(this).data('id');
		$('.catalog-content').hide();
		$('.catalog-content[data-id="' + id + '"]').fadeIn();
	});

}(jQuery));