$(document).ready(function () {
  const swiper_product = new Swiper('.productSlider', {
    slidesPerView: "auto",
    spaceBetween: 20,
  });
  $('.humburger-menu-icon').click(function (e) {
    $('#background-overlay').toggle();
    $('.mobile-list').addClass('active');
    $('.mobile-list-close').addClass('active');
  });
  $('.mobile-list-close').click(function (e) {
    $('#background-overlay').toggle();
    $('.mobile-list').removeClass('active');
    $('.mobile-list-close').removeClass('active');
  });
  $('#background-overlay').click(function (e) {
    $('#background-overlay').toggle();
    $('.mobile-list').removeClass('active');
    $('.mobile-list-close').removeClass('active');
  });
  $('.mobile-dropdown').after().click(function (e) {
    $(this).children('ul').fadeToggle();
    $(this).toggleClass('active');
    e.stopPropagation();
  });
});
// AdvertiseBanner
var swiper = new Swiper(".advrtiseBanner", {
      slidesPerView: 1,
      spaceBetween: 30,
    loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})