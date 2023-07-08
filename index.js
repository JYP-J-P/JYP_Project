// to top 버튼 작동

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  let submain = $('.main_text_box1').offset().top;
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

// 베가스 슬라이더 

$('.main_container').vegas({
  slides: [{ src: './images/main_img.png' }, { src: './images/main_img2.png' }],
  timer: false,
  delay: 5000,
  transition: 'fade2',
});

AOS.init({
  duration: 1200,
})
