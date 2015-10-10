// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
    'use strict';
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }
})();

$(function () {
    $("[data-hover='tooltip']").tooltip();
    // Waves.attach('.btn' ['waves-button', 'waves-float']);
    // Waves.attach('a', ['waves-button', 'waves-float']);
    // Waves.init();
    new WOW().init();
    // wavesEffect();
    $('.js-show').on('click',function(){
    $('.card-reveal').slideToggle('slow');
    });

    $('.card-reveal .close').on('click',function(){
        $('.card-reveal').slideToggle('slow');
    });
});

//http://codepen.io/zavoloklom/pen/Gubja
// var wavesEffect = function () {
//   $('.btn' ).on('click', function (e){
//   $(".ink").remove();
//
//   var posX = $(this).offset().left,
//       posY = $(this).offset().top,
//       buttonWidth = $(this).width(),
//       buttonHeight =  $(this).height();
//
//
//   $(this).prepend("<span class='ink'></span>");
//
//   if(buttonWidth >= buttonHeight) {
//     buttonHeight = buttonWidth;
//   } else {
//     buttonWidth = buttonHeight;
//   }
//
//   var x = e.pageX - posX - buttonWidth / 2;
//   var y = e.pageY - posY - buttonHeight / 2;
//
//   $(".ink").css({
//     width: buttonWidth,
//     height: buttonHeight,
//     top: y + 'px',
//     left: x + 'px'
//   }).addClass("rippleEffect");
//   });
// }

// RIPPLES BUTTON & INPUT
// http://codepen.io/joshadamous/pen/yyyqJZ
$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });

});
