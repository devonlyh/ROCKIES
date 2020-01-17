$(document).ready(function() {
  lightbox.option({
    'wrapAround': true
  });

  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 300) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  })

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if(position >= 1300) {
      $('.colorado-gallery').addClass('change');
    } else {
      $('.colorado-gallery').removeClass('change');
    }
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if(position >= 1900) {
      $('.utah-gallery').addClass('change');
    } else {
      $('.utah-gallery').removeClass('change');
    }
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if(position >= 3200) {
      $('.idaho-gallery').addClass('change');
    } else {
      $('.idaho-gallery').removeClass('change');
    }
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if(position >= 4000) {
      $('.new-mexico-gallery').addClass('change');
    } else {
      $('.new-mexico-gallery').removeClass('change');
    }
  });


});
