$(document).ready(function(){function e(){window.pageYOffset,$(".toTop")}var t=$(".toTop");t.click(function(){$("html, body").animate({scrollTop:0},"fast")}),window.addEventListener("scroll",e)});var header=document.getElementById("header"),headerHeight=header.offsetHeight;console.log(headerHeight);var background=document.getElementById("back");background.style.top=headerHeight+"px";var content=document.getElementById("content");content.style.top=headerHeight+"px";var footer=document.getElementById("footer");footer.style.top=headerHeight+"px",$(document).ready(function(){widthMedia=window.outerWidth,widthMedia>=0&&widthMedia<=767?($(".menu").css("transform","translateX(-100%)"),$(".overlay").css("display","none"),$(".toggle-menu").click(function(){$(".menu").css("transform","translateX(0%)"),$(".overlay").css("display","block")}),$(".overlay").click(function(){$(this).css("display","none"),$(".menu").css("transform","translateX(-100%)")}),$(".btn-close").click(function(){$(".menu").css("transform","translateX(-100%)"),$(".overlay").css("display","none")})):widthMedia>=768&&$(".menu").css("transform","translateX(0%)")});var resize=function(){var e=document.getElementById("header"),t=e.offsetHeight;background.style.top=t+"px",content.style.top=t+"px",footer.style.top=t+"px",widthMedia=window.outerWidth,console.log(widthMedia),$(document).ready(function(){widthMedia>=0&&widthMedia<=767?($(".menu").css("transform","translateX(-100%)"),$(".overlay").css("display","none"),$(".toggle-menu").click(function(){$(".menu").css("transform","translateX(0%)"),$(".overlay").css("display","block")}),$(".overlay").click(function(){$(this).css("display","none"),$(".menu").css("transform","translateX(-100%)")}),$(".btn-close").click(function(){$(".menu").css("transform","translateX(-100%)"),$(".overlay").css("display","none")})):widthMedia>=768&&$(".menu").css("transform","translateX(0%)")})};