// document.body.className = "fade";
// document.body.classList.add("fade");

// document.addEventListener("DOMContentLoaded", () => {
//   window.setTimeout(() => {
//     document.body.className = "header_bar";
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   window.setTimeout(() => {
//     document.body.classList.remove("fade");
//   });
// });

$(function () {
  $("body").fadeIn(500, function () {
    $(this).animate(
      {
        top: "100px",
      },
      1000
    );
  });

  $("a").click(function () {
    var url = $(this).attr("href");
    $("body").animate(
      {
        opacity: "0",
        // blur,
        top: "100px",
      },
      500,
      function () {
        document.location.href = url;
      }
    );

    return false;
  });
});
