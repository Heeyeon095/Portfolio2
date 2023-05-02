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

function mainText2 () {
  $('.main-text').css({
    height: '450px',
    width: '450px',
    padding: '35px 0'
  });
  $('.h4').css({
    opacity: 1,
    width: '350px'
  });
  $('.hy').css({
    opacity: 1,
    width: '1000px'
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
    marginTop: '100px'
  });
  $('.main-bg').css({
    bottom: '0',
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
  setTimeout(mainText2, 1000);
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
    setTimeout(c1, 0);
    setTimeout(c2, 100);
    setTimeout(c3, 200);
    setTimeout(c4, 300);
  } else if($(this).scrollTop() < wh + 500) {
    $('.check').removeClass('show');
  };
  if($(this).scrollTop() > wh + 900) {
    $('.skill-title').addClass('show');
  } else {
    $('.skill-title').removeClass('show');
  };
  if($(this).scrollTop() > wh + 1200) {
    $('.skill-tool').addClass('show');
  } else {
    $('.skill-tool').removeClass('show');
  };
  if($(this).scrollTop() > wh + 1500) {
    $('.skill-language').addClass('show');
  } else {
    $('.skill-language').removeClass('show');
  };
  if($(this).scrollTop() > wh + 1800) {
    $('.skill-learning').addClass('show');
  } else {
    $('.skill-learning').removeClass('show');
  };
});

// portfolio slide

let pf = 0;

$('.portfolio-prev > i').click(function(){
  console.log(pf);
  if(pf == 0) {

  } else if(pf == 1) {
    $(this).css({
      backgroundColor: 'rgba(0,0,0,0.05)'
    });
    $('.portfolio-con').css({
      left: 'calc(50% - 330px)'
    });
    $('.portfolio').removeClass('on');
    $('.portfolio').eq(pf-1).addClass('on');
    pf--;
  } else if(pf == 2) {
      $('.portfolio-con').css({
        left: 'calc(50% + -960px)'
      });
      $('.portfolio').removeClass('on');
      $('.portfolio').eq(pf-1).addClass('on');
    pf--;
  } else if(pf == 4) {
    $('.portfolio-next > i').css({
      backgroundColor: 'rgba(0,0,0,0.2)'
    });
    $('.portfolio-con').css({
      left: 'calc(50% + -2225px)'
    });
    $('.portfolio').removeClass('on');
    $('.portfolio').eq(pf-1).addClass('on');
    pf--;
  } else if(pf == 3) {
    $('.portfolio-con').css({
      left: 'calc(50% + -1590px)'
    });
    $('.portfolio').removeClass('on');
    $('.portfolio').eq(pf-1).addClass('on');
    pf--;
  } 
});

$('.portfolio-next > i').click(function(){
    if(pf == 0) {
      $('.portfolio-prev > i').css({
        backgroundColor: 'rgba(0,0,0,0.2)'
      });
      $('.portfolio-con').css({
        left: 'calc(50% + -960px)'
      });
      $('.portfolio').eq(pf).removeClass('on');
      $('.portfolio').eq(pf+1).addClass('on');
      pf++;
    } else if(pf == 1) {
      $('.portfolio').removeClass('on');
      $('.portfolio').eq(pf+1).addClass('on');
      $('.portfolio-con').css({
        left: 'calc(50% + -1590px)'
      });
      pf++;
    } else if(pf == 2) {
      $('.portfolio').removeClass('on');
      $('.portfolio').eq(pf+1).addClass('on');
      $('.portfolio-con').css({
        left: 'calc(50% + -2225px)'
      });
      pf++;
    } else if(pf == 3) {
      $('.portfolio').removeClass('on');
      $('.portfolio').eq(pf+1).addClass('on');
      $('.portfolio-con').css({
        left: 'calc(50% + -2850px)'
      });
      $(this).css({
        backgroundColor: 'rgba(0,0,0,0.05)'
      });
      pf++;
    } else if(pf == 4) {}
  });

  // need <menu>
  
  let curr = 0;

function oslide() {
  i = curr % 4;

  curr++;
  
  $(".need-text").removeClass('on');
  $(".need-text").eq(i).addClass('on');
}

setInterval(() => oslide(), 4000);