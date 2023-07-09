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
// 스르륵 올라오는 효과
AOS.init({
  duration: 1200,
});
