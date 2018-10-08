$(document).ready(function(){

  //addes loaded class after 2 milliseconds
  setTimeout(function(){
      $('body').addClass('loaded')}, 2);

  //grab top animation
  $('#fab-top').click(function(event) {
      event.preventDefault();

      $('html, body').animate({scrollTop: 700}, 300);
  });

  $('.navigation-mobile-hamburger').click(function(event) {
    event.preventDefault();
    $('.navigation-mobile').fadeIn(500);
  });

  $('.navigation-mobile-close').click(function(event) {
    event.preventDefault();
    $('.navigation-mobile').fadeOut(500);
  });

  //disable hover states on Mobile
  var touch = 'ontouchstart' in document.documentElement
  || navigator.maxTouchPoints > 0
  || navigator.msMaxTouchPoints > 0;

  if (touch) { // remove all :hover stylesheets
      try { // prevent exception on browsers not supporting DOM styleSheets properly
          for (var si in document.styleSheets) {
              var styleSheet = document.styleSheets[si];
              if (!styleSheet.rules) continue;

              for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                  if (!styleSheet.rules[ri].selectorText) continue;

                  if (styleSheet.rules[ri].selectorText.match(':hover')) {
                      styleSheet.deleteRule(ri);
                  }
              }
          }
      } catch (ex) {}
  }
});
