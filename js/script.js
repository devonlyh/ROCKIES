$(document).ready(function() {
  // initialize animation on scroll (AOS) library
  AOS.init();
    
  /* Scroll Down On Click --> Works with circle button and nav menu */
  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
          /*var headerHeight = $(".stickyheader").height();*/
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top - 100
                  }, 1000, "swing");
                  return false;
              }
          }
      });
  });

  // navigation menu button changes from an three lines to an 'x' and back --> toggle
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });

  // color of menu item should change when a section is active
  $('.menu-item').click(function() {
    $('.menu-item').toggleClass('.nav-active');
  });

  // navigation menu shrinks as the user scrolls down the page
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 300) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });

// Decided to use aos scroll animations instead of custom animations for thumbnails
// aos scroll animations are more dynamic & easy to use
// documentation under "bookmarks" in chrome browser
/*
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if(position >= 600) {
      $('.about').addClass('change');
    } else {
      $('.about').removeClass('change');
    }
  });
*/

});
