$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.menu').toggleClass('active')
    });
});

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.popup-bg').click(function (e) {
  if (!$(e.target).closest(".popup").length) {
    $('.popup-bg').fadeOut(600);
  }
});