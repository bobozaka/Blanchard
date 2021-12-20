// show first content by default
$('.section-catalog__accordion-list section-catalog__accordion-item').addClass('active');
$('.catalog-left').hide();
$('.catalog-left-active').show();

// click function
$('.section-catalog__accordion-list section-catalog__accordion-item').click(function(){
  $('.section-catalog__accordion-list section-catalog__accordion-item').removeClass('active');
  $(this).addClass('active');
  $('.catalog-left').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
  
});