const cursor=document.querySelector(".cursor");function mainText2(){$(".main-text").css({height:"450px",width:"450px",padding:"35px 0"}),$(".h4").css({opacity:1,width:"350px"}),$(".hy").css({opacity:1,width:"1000px"}),setTimeout(mainTextOn,1e3)}function mainTextOn(){$(".main-text span").css({opacity:1}),$(".main-text p").css({opacity:1}),$(".h2").css({opacity:1,marginTop:"100px"}),$(".main-bg").css({bottom:"0"}),$(".scroll > i").css({opacity:1}),setTimeout(drag,1e3)}function drag(){$(".section").off("scroll touchmove mousewheel")}document.addEventListener("mousemove",(o=>{cursor.style.left=o.pageX-20+"px",cursor.style.top=o.pageY-20+"px"})),$("a").hover((function(){$(this).css({animation:"acolor 3s infinite",fontWeight:"blod"}),$(".cursor").css({width:"50px",height:"50px"})}),(function(){$(".cursor").css({width:"35px",height:"35px"}),$(this).css({animation:"acolor 3s 0",fontWeight:"100"})})),$(document).ready((function(){$(".section").on("scroll touchmove mousewheel",(function(o){return o.preventDefault(),o.stopPropagation(),!1})),setTimeout(mainText2,1e3)})),$(".main-text").hover((function(){$(".cursor").addClass("main-text-on")}),(function(){$(".cursor").removeClass("main-text-on")}));let wh=$(window).height();function c1(){$(".c1").addClass("show")}function c2(){$(".c2").addClass("show")}function c3(){$(".c3").addClass("show")}function c4(){$(".c4").addClass("show")}$(window).resize((function(){wh=$(window).height()})),$(document.body).scroll((function(){$(document.body).scrollTop();$(this).scrollTop()>wh-300?($(".profile-img").addClass("show"),$(".profile").addClass("show")):$(this).scrollTop()<wh-300&&($(".profile-img").removeClass("show"),$(".profile").removeClass("show")),$(this).scrollTop()>wh-400?$(".profile-title").addClass("show"):$(this).scrollTop()<wh-400&&$(".profile-title").removeClass("show"),$(this).scrollTop()>wh+500?(setTimeout(c1,0),setTimeout(c2,100),setTimeout(c3,200),setTimeout(c4,300)):$(this).scrollTop()<wh+500&&$(".check").removeClass("show"),$(this).scrollTop()>wh+900?$(".skill-title").addClass("show"):$(".skill-title").removeClass("show"),$(this).scrollTop()>wh+1200?$(".skill-tool").addClass("show"):$(".skill-tool").removeClass("show"),$(this).scrollTop()>wh+1500?$(".skill-language").addClass("show"):$(".skill-language").removeClass("show"),$(this).scrollTop()>wh+1800?$(".skill-learning").addClass("show"):$(".skill-learning").removeClass("show")}));let pf=0;$(".portfolio-prev > i").click((function(){0==pf||(1==pf?($(this).css({backgroundColor:"rgba(0,0,0,0.05)"}),$(".portfolio-con").css({left:"calc(50% - 330px)"}),$(".portfolio").removeClass("on"),$(".portfolio").eq(pf-1).addClass("on"),pf--):2==pf?($(".portfolio-con").css({left:"calc(50% + -960px)"}),$(".portfolio").removeClass("on"),$(".portfolio").eq(pf-1).addClass("on"),pf--):4==pf?($(".portfolio-next > i").css({backgroundColor:"rgba(0,0,0,0.2)"}),$(".portfolio-con").css({left:"calc(50% + -2225px)"}),$(".portfolio").removeClass("on"),$(".portfolio").eq(pf-1).addClass("on"),pf--):3==pf&&($(".portfolio-con").css({left:"calc(50% + -1590px)"}),$(".portfolio").removeClass("on"),$(".portfolio").eq(pf-1).addClass("on"),pf--))})),$(".portfolio-next > i").click((function(){0==pf?($(".portfolio-prev > i").css({backgroundColor:"rgba(0,0,0,0.2)"}),$(".portfolio-con").css({left:"calc(50% + -960px)"}),$(".portfolio").eq(pf).removeClass("on"),$(".portfolio").eq(pf+1).addClass("on"),pf++):1==pf?($(".portfolio").removeClass("on"),$(".portfolio").eq(pf+1).addClass("on"),$(".portfolio-con").css({left:"calc(50% + -1590px)"}),pf++):2==pf?($(".portfolio").removeClass("on"),$(".portfolio").eq(pf+1).addClass("on"),$(".portfolio-con").css({left:"calc(50% + -2225px)"}),pf++):3==pf&&($(".portfolio").removeClass("on"),$(".portfolio").eq(pf+1).addClass("on"),$(".portfolio-con").css({left:"calc(50% + -2850px)"}),$(this).css({backgroundColor:"rgba(0,0,0,0.05)"}),pf++)}));let curr=0;function oslide(){i=curr%4,curr++,$(".need-text").removeClass("on"),$(".need-text").eq(i).addClass("on")}setInterval((()=>oslide()),4e3);