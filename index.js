//loading
const html = document.querySelector("html");
html.style.overflow = "hidden";
$(window).on("load", function () {
  var counter = 0;
  var c = 0;

  var i = setInterval(function () {
    counter++;
    c++;
    if (counter == 101) {
      html.style.overflow = "auto";
      clearInterval(i);
      $(".loading").animate({ opacity: "0" }, 400, function () {
        $(this).css({ display: "none" });
      });
    }
  }, 20);
});
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
