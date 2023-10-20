$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('body, .header').toggleClass('is-active');
  });
});
