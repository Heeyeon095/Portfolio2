// cursor

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX - 20 + 'px';
    cursor.style.top = e.pageY - 20 + 'px';
});

$('.main-text').hover(function(){
  $('.cursor').css({
    width: '50px',
    height: '50px'
  });
}, function(){
  $('.cursor').css({
    width: '35px',
    height: '35px'
  });
});

// 메인

function mainText () {
  $('.main-text').css({
    width: '500px'
  });
  setTimeout(mainText2, 600);
};

function mainText2 () {
  $('.main-text').css({
    height: '300px'
  });
  $('.main > h4').css({
    width: '300px'
  });
}

$(document).ready(function(){
  setTimeout(mainText, 600);
});

$('.main-text').hover(function(){
  $('.cursor').addClass('main-text-on');
},function(){
  $('.cursor').removeClass('main-text-on');
});



// 스크롤 이벤트

$(window).scroll(function(){
  let sv = window.scrollY;    //세로 스크롤 값을 value 함수에 저장한다.
  console.log(sv);
})