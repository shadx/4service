$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    controls: false,
    pagerCustom: '.b-pager'
  }); 
  
  $('.b-main_clients-slider').bxSlider({
    auto: true,
    slideMargin: 20,
    minSlides: 3,
		maxSlides: 8,
		moveSlides: 8,
		slideWidth: 80
  }); 
  
  $('.b-head_wslider-1').css('top', '0px');
  
  var slider = $('.b-head_slider-1, .b-head_slider-2, .b-head_slider-3').bxSlider({
    mode: 'fade',
    auto: true,
    slideWidth: 615,
    captions: true,
    controls: true
  });
  
  $('.bxpager_item-1').click(function() {
    $('.bxpager_item').removeClass('active');
    $(this).addClass('active');
    $('.b-head_wslider-2').css('top', '-370px');
    $('.b-head_wslider-3').css('top', '-370px');
    $('.b-head_wslider-1').css('top', '0px');
  });
  $('#test').click(function() {
    $('.bxpager_item').removeClass('active');
    $(this).addClass('active');
    $('.b-head_wslider-1').css('top', '-370px');
    $('.b-head_wslider-3').css('top', '-370px');
    $('.b-head_wslider-2').css('top', '0px');
  });
  $('.bxpager_item-3').click(function() {
    $('.bxpager_item').removeClass('active');
    $(this).addClass('active');
    $('.b-head_wslider-1').css('top', '-370px');
    $('.b-head_wslider-2').css('top', '-370px');
    $('.b-head_wslider-3').css('top', '0px');
  });
  
  
  
  $('.bxslider-informcentr').bxSlider({
    mode: 'fade',
    captions: false,
    controls: false,
    auto: true,
    pager: true
  });
  
  
  
});