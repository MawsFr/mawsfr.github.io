// This script fixes the sidemenu when scrolling
var $menu = $('.menu');
var $window = $(window);

document.body.onscroll = e => {
  if ($window.scrollTop() > 230) {
    $menu.addClass('fixed-menu');
  } else {
    $menu.removeClass('fixed-menu');
  }
};
