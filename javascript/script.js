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
  setTimeout(mainText2, 1000);
};

function mainText2 () {
  $('.main-text').css({
    height: '300px'
  });
  $('.h4').css({
    opacity: 1,
    width: '300px'
  });
  setTimeout(mainTextOn, 1000);
};

function mainTextOn () {
  $('.main-text span').css({
    opacity: 1
  });
  $('.main-text p').css({
    opacity: 1
  });
  $('.h2').css({
    opacity: 1,
    marginTop: '50px'
  });
  $('.main-bg').css({
    bottom: '0',
  });
};

$(document).ready(function(){
  setTimeout(mainText, 1000);
});

$('.main-text').hover(function(){
  $('.cursor').addClass('main-text-on');
},function(){
  $('.cursor').removeClass('main-text-on');
});

// $('#fullpage').fullpage();
new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true
});