// cursor

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX - 20 + 'px';
    cursor.style.top = e.pageY - 20 + 'px';
});

$('a').hover(function(){
  $(this).css({
    animation: 'acolor 3s infinite',
    fontWeight: 'blod'
  });
  $('.cursor').css({
    width: '50px',
    height: '50px'
  });
}, function(){
  $('.cursor').css({
    width: '35px',
    height: '35px'
  });
  $(this).css({
    animation: 'acolor 3s 0',
    fontWeight: '100'
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
    marginTop: '70px'
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
    top: '40%'
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

// scroll events

let wh = $(window).height();


$(window).resize(function() {
  wh = $(window).height();
});

function c1 () {
  $('.c1').addClass('show');
}

function c2 () {
  $('.c2').addClass('show');
}

function c3 () {
  $('.c3').addClass('show');
}

function c4 () {
  $('.c4').addClass('show');
}


$(document.body).scroll(function(){
  let bt = $(document.body).scrollTop();

  if($(this).scrollTop() > wh - 300) {
    $('.profile-img').addClass('show');
    $('.profile').addClass('show');
  } else if($(this).scrollTop() < wh - 300) {
    $('.profile-img').removeClass('show');
    $('.profile').removeClass('show');
  };
  if($(this).scrollTop() > wh - 400) {
    $('.profile-title').addClass('show');
  } else if($(this).scrollTop() < wh - 400) {
    $('.profile-title').removeClass('show');
  };
  if($(this).scrollTop() > wh + 500) {
    setTimeout(c1, 100);
    setTimeout(c2, 200);
    setTimeout(c3, 300);
    setTimeout(c4, 400);
  } else if($(this).scrollTop() < wh + 500) {
    $('.check').removeClass('show');
  };
});