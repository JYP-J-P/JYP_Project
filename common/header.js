//scroll-up-bar.js
let prescroll = window.scrollY;
console.log(prescroll);

$(window).on('scroll', () => {
  //스크롤시 변수에 저장
  let scroll = window.scrollY;
  console.log(scroll);
  console.log('prescroll00', prescroll);

  // 이전 스크롤값이 크면 트루, 스크루 올리면 헤더보임
  if (prescroll > scroll) {
    $('nav').css({ top: 0 });
  } else {
    // 이후 스크롤값이 크면 풜스, 스크루 올리면 헤더가려짐
    $('nav').css({ top: -70 });
  }

  prescroll = scroll;
});
