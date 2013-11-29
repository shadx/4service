$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    controls: false,
    pagerCustom: '.b-pager'
  }); 
  $('.b-head_wslider-1').show();
  var slider = $('.b-head_slider-1, .b-head_slider-2, .b-head_slider-3').bxSlider({
    mode: 'fade',
    auto: true,
    captions: true,
    controls: true
  });
  
  $('.bxpager_item-1').click(function() {
    $('.bxpager_item').removeClass('active');
    $(this).addClass('active');
    $('.b-head_wslider-2').hide();
    $('.b-head_wslider-3').hide();
    $('.b-head_wslider-1').show();
    slider.reloadSlider();
  });
  $('.bxpager_item-2').click(function() {
    $('.bxpager_item').removeClass('active');
    $(this).addClass('active');
    $('.b-head_wslider-1').hide();
    $('.b-head_wslider-3').hide();
    $('.b-head_wslider-2').show();
    slider.reloadSlider();
  });
  $('.bxpager_item-3').click(function() {
    $('.bxpager_item').removeClass('active');
    $(this).addClass('active');
    $('.b-head_wslider-1').hide();
    $('.b-head_wslider-2').hide();
    $('.b-head_wslider-3').show();
    slider.reloadSlider();
  });
  
});