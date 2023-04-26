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
    width: '350px'
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
  setTimeout(fullbg, 1000);
};

function fullbg () {
  $('.full-bg').css({
    width: '10px',
    height: '10px',
    borderRadius: '100px',
    top: '45%'
  });
  $('.main-text').css({
    animation: 'sponge 2s 1'
  });
  setTimeout(drag, 1000);
};

function drag () {
  $('.section').off('scroll touchmove mousewheel');
};

$(document).ready(function(){
  $('.section').on('scroll touchmove mousewheel', function(event) {
    
    event.preventDefault();
    event.stopPropagation();
    return false;
    
  });
  setTimeout(mainText, 1000);
});

$('.main-text').hover(function(){
  $('.cursor').addClass('main-text-on');
},function(){
  $('.cursor').removeClass('main-text-on');
});

$(window).scroll(function(){
  let wh = $(window).height();
  console.log(wh);
  if($(window).scrollTop() == wh) {
    $('body').css({
      backgroundColor: '#aaa'
    });
  };
});