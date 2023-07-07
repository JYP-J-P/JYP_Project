//scroll-up-bar.js
let prescroll = window.scrollY;
console.log(prescroll);

$(window).on("scroll", () => {
  //스크롤시 변수에 저장
  let scroll = window.scrollY;
  console.log(scroll);
  console.log("prescroll00", prescroll);

  // 이전 스크롤값이 크면 트루, 스크루 올리면 헤더보임
  if (prescroll > scroll) {
    $("nav").css({ top: 0 });
  } else {
    // 이후 스크롤값이 크면 풜스, 스크루 올리면 헤더가려짐
    $("nav").css({ top: -70 });
  }

  prescroll = scroll;
});

// a 기본값 삭제
$('a[href="#"]').on('click',(e)=>{
  e.preventDefault();
  });

// 메뉴 클릭 페이지 변경시 안보였다가 몇초 뒤에 나타남
// let target = document.querySelector("a");
// $(function () {
//   $("body").fadeIn(500, function () {
//     $(this).animate(
//       {
//         top: "0",
//       },
//       500
//     );
//   });

//   $("a").click(function () {
//     // var url = $(this).attr("href");
//     $("body").animate(
//       {
//         opacity: "0",
//         // blur,
//         top: "0",
//       },
//       500,
//       function () {
//         document.location.href = url;
//       }
//     );

//     return false;
//   });
// });
