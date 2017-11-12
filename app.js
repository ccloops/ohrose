'use strict';


$(function(){
  $('li').each(function(){
    if ($(this).prop('href') === window.location.href) {
      $(this).addClass('active'); $(this).parents('a').addClass('active');
    }
  });
});

$('.icon-menu').on('click', function() {
  $('#nav-items').show();
})
