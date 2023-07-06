// to top 버튼 작동

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  let submain = $('.sub_main').offset().top;
  if (scroll >= submain) {
    $('.top_btn').addClass('active');
  } else {
    $('.top_btn').removeClass('active');
  }
});

$('.top_btn').on('click', (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
