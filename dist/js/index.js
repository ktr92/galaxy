$(document).ready((function(){var e,t;$("input[type=tel]").mask("7 (999) 999-99-99"),$((function(){$(".accordion__title").on("click",(function(e){e.preventDefault();var t=$(this);t.hasClass("accordion-active")||($(".accordion__content").slideUp(400),$(".accordion__title").removeClass("accordion-active"),$(".accordion__arrow").removeClass("accordion__rotate")),t.toggleClass("accordion-active"),t.next().slideToggle(),$(".accordion__arrow",this).toggleClass("accordion__rotate")}))})),$("a.scrollTo").click((function(e){e.preventDefault();var t=$($(this).attr("href")).offset().top-10;return $("html:not(:animated),body:not(:animated)").animate({scrollTop:t},600),$(".mainmenu").removeClass("active"),$(".menubtn").removeClass("active"),!1})),window.addEventListener("scroll",(e=>{scroll=window.scrollY,scroll>=1200?document.getElementById("gototop").classList.add("active"):document.getElementById("gototop").classList.remove("active")})),$("button.menubtn").on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".mainmenu").toggleClass("active")})),e=".mainmenu",t=".menubtn",$(document).click((function(o){$(o.target).closest(`${e},${t}`).length||($(t).removeClass("active"),$(e).removeClass("active"))})),$(document).keyup((function(o){"Escape"===o.key&&($(t).removeClass("active"),$(e).removeClass("active"))})),(new WOW).init()})),$(document).ready((function(){YaMapsShown=!1,$(window).scroll((function(){var e;YaMapsShown||$(window).scrollTop()+$(window).height()>$(document).height()-700&&((e=document.createElement("script")).type="text/javascript",e.src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A29effecca8741f8c7ba884726c458ad6344e6e30dc1bc81265e789bd75832c6e&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true",document.getElementById("YaMaps").appendChild(e),YaMapsShown=!0)}))}));