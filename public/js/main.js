function filters_button_mobile(){$(".filters .catalog-filters__header .button").click(function(){$(this).hasClass("active")?($(".filters #filters_list").css("max-height","0"),$(this).removeClass("active")):($(".filters #filters_list").css("max-height","none"),$(this).addClass("active"))})}function preset_button_catalog(){$(".catalog-page--header .presets a").click(function(){$(this).hasClass("current")||($(".catalog-page--header .presets a.current").removeClass("current"),$(this).addClass("current"))})}function view_mode_catalog(){$(".content.catalog-page .click-filters .position a").click(function(){$(this).hasClass("active")||($(".content.catalog-page .click-filters .position a.active").removeClass("active"),$(".content.catalog-page .product-items").attr("class","product-items "+$(this).attr("class")),"multi-colons"!=$(this).attr("class")?$(".content.catalog-page .product-items").find(".product-item").each(function(){$(this).css("height","auto"),$(this).css("height",$(this).css("height"))}):($(".content.catalog-page .product-items").find(".product-item").each(function(){$(this).css("height","auto")}),product_items_fix_jump()),$(this).addClass("active"))})}function sort_mode_catalog(){$(".content.catalog-page .click-filters .sort a").click(function(){$(this).hasClass("active")||($(".content.catalog-page .click-filters .sort a.active").removeClass("active"),$(this).addClass("active"))})}function menu_all_products(){$(".header .all-product > a").click(function(){$(".header .all-product").hasClass("active")?($(".header .all-product .menu").css("max-height","0"),$(".header .all-product .fon").css("display","none"),$(".header .all-product").removeClass("active")):($(".header .all-product .menu").css("max-height","none"),$(".header .all-product .fon").css("display","block"),$(".header .all-product").addClass("active"),$(document).mouseup(function(e){var t=$(".header .all-product .menu");t.is(e.target)||0!==t.has(e.target).length||($(".header .all-product .menu").css("max-height","0"),$(".header .all-product .fon").css("display","none"),$(".header .all-product").removeClass("active"))}))}),$(".header .all-product .menu .title .close").click(function(){$(".header .all-product").hasClass("active")&&($(".header .all-product .menu").css("max-height","0"),$(".header .all-product .fon").css("display","none"),$(".header .all-product").removeClass("active"))}),$(".header .all-product .menu ul li .submenu").click(function(){$(".header .all-product .menu  ul li").parent("li ul").parent().css("position","initial"),$(this).parent("li").find("ul").css("display","flex"),$(this).parent("li").find(".subtitle").css("display","flex"),$(this).parent("li").find("ul").css("top",$(this).parent("li").find(".subtitle").css("height"))}),$(".header .all-product .menu ul li .subtitle .close").click(function(){$(".header .all-product .menu  ul li").parent("li ul").parent().css("position","relative"),$(".header .all-product .menu .title .close").trigger("click")}),$(".header .all-product .menu ul li .subtitle .down").click(function(){$(".header .all-product .menu  ul li").parent("li ul").parent().css("position","relative"),$(this).parent().parent().find("ul").css("display","none"),$(this).parent(".subtitle").css("display","none")})}function menu_gamburger(){$(".header .top-menu .gamburger").click(function(){$(".header .top-menu").hasClass("active")||($(".header .top-menu nav").css("display","flex"),$(".header .top-menu").addClass("active"))}),$(".header .top-menu nav .close .button").click(function(){$(".header .top-menu").hasClass("active")&&($(".header .top-menu nav").css("display","none"),$(".header .top-menu").removeClass("active"))}),$(".header .top-menu nav ul li .submenu").click(function(){$(this).parent("li").find("ul").css("display","flex"),$(this).parent("li").find(".subtitle").css("display","flex"),$(this).parent("li").find("ul").css("top",$(this).parent("li").find(".subtitle").css("height"))}),$(".header .top-menu nav ul li .subtitle .close").click(function(){$(".header .top-menu nav .close .button").trigger("click")}),$(".header .top-menu nav ul li .subtitle .down").click(function(){$(this).parent().parent().find("ul").css("display","none"),$(this).parent(".subtitle").css("display","none")})}function show_search_form(){var e=$(".header .search");e.find(".img").click(function(){e.hasClass("active")||(e.addClass("active"),e.find(".input").focus(),e.focusout(function(){e.removeClass("active")}))})}function catalog_accordion_button(){$(".catalog .accordion").click(function(){var e=$(this).next();$(this).hasClass("active")?($(this).removeClass("active"),e.hasClass("content-accordion")&&e.css("display","none")):($(this).addClass("active"),e.hasClass("content-accordion")&&e.css("display","flex"))})}function catalog_accordion_remove_excess_button(){$(".catalog #filters_list").find(".accordion").each(function(){$(this).next().hasClass("content-accordion")||$(this).addClass("empty")})}function cart_button(){var e=$(".header .cart"),t=e.find(".cart-content");e.find(".icon").click(function(){e.hasClass("active")?(e.removeClass("active"),t.css("display","none")):(e.addClass("active"),t.css("display","flex"))}),$(".header .cart .title .close").click(function(){e.removeClass("active"),t.css("display","none")}),t.find(".cart-content__footer .continue").click(function(){e.removeClass("active"),t.css("display","none")})}function cart_change_value(){var e=$(".cart .cart-content");$(".cart .icon");e.find(".item .text .amount .plus").click(function(){var e=$(this).parent().find(".value"),t=parseFloat(e.text());e.text(t+1),cart_amount_items(),cart_all_sum()}),e.find(".item .text .amount .minus").click(function(){var e=$(this).parent().find(".value"),t=parseFloat(e.text());1==t?$(this).parent().parent().find(".close").trigger("click"):e.text(t-1),cart_amount_items(),cart_all_sum()})}function cart_remove_item(){$(".cart .cart-content .item .text .close").click(function(){$(this).parent().parent().remove(),0==$(".header .cart .cart-content .item").length&&($(".header .cart").removeClass("active"),$(".header .cart .cart-content").css("display","none"),$(".header .cart .cart-content .title").after(function(){return'<p class="empty">Корзина пуста</div>'})),cart_amount_items(),cart_all_sum()})}function cart_amount_items(){var e=$(".header .cart .cart-content"),t=0;e.find(".item").each(function(){t+=parseFloat($(this).find(".amount .value").text())}),e.parent().find(".icon").attr("data-label",t)}function cart_all_sum(){var e=0;$(".header .cart .cart-content").find(".item").each(function(){e+=parseFloat($(this).find(".item-price").text().replace(" ",""))*$(this).find(".amount .value").text()}),$(".cart .cart-content__footer .resume .sum").text(e+" руб.")}function product_slider_correct_thumb(){var e=0;$(".slider-block .slider-gallery li").each(function(){$(this).hasClass("circle")&&$(".slider-block .lSPager li:nth-child("+e+")").addClass("circle"),e++})}function product_accordion_button(){if(currentWidthWindow>=tabletSize){var e=$(".product-page .tabs .tab:first"),t=e.parent().css("height"),a=30;e.find(".accordion:first").addClass("active"),e.find(".content-accordion:first").css("display","flex"),e.parent().css("height",Number.parseFloat(e.find(".content-accordion:first").css("height"))+Number.parseFloat(t)+a);for(var n=0;n<4;n++)e.css("height",t),e=e.next()}$(".product-page .tabs .tab").click(function(){var e=$(this).find(".accordion"),n=0;if(e.hasClass("active"))e.removeClass("active"),e.next().css("display","none"),currentWidthWindow>=tabletSize&&$(this).parent().css("height",t);else{if(currentWidthWindow>=tabletSize){var i=$(".product-page .tabs .tab");i.parent().css("height",t);for(var c=0;c<3;c++)i.find(".accordion").removeClass("active"),i.find(".content-accordion").css("display","none"),i=i.next()}e.addClass("active"),e.next().css("display","flex"),currentWidthWindow>=tabletSize&&(n=e.next().css("height"),$(this).parent().css("height",Number.parseFloat(n)+Number.parseFloat(t)+a))}})}function product_items_fix_jump(){var e=0,t=0;$(".content").find(".product-items").each(function(){$(this).hasClass("with-options")||$(this).hasClass("short-list")||$(this).find(".product-item").each(function(){t=Number.parseFloat($(this).css("height")),e<t?(e=t,$(this).css("height",e)):e==t&&$(this).css("height",e)})})}function select_button(){function e(e,t){return new RegExp("\\b"+t+"\\b").test(e.className)}function t(t,a,n){var i=t.className;t.className=e(t,a)?i.replace(a,n):i.replace(n,a)}function a(t,a){e(t,a)||(t.className+=""==t.className?a:" "+a)}if(document.getElementById||document.createTextNode){for(var n=0,i=new Array,c=document.getElementsByTagName("select"),s=0;s<c.length;s++)if(e(c[s],"turnintodropdown_demo2")){var o=document.createElement("input");o.name=c[s].name,o.type="hidden",o.id=c[s].id,o.value=c[s].options[0].value,c[s].parentNode.insertBefore(o,c[s]);var l=document.createElement("a");a(l,"select--title"),l.href="#",l.onclick=function(){return t(this.parentNode.getElementsByTagName("ul")[0],"dropdownhidden_demo2","dropdownvisible_demo2"),!1},l.appendChild(document.createTextNode(c[s].options[0].text)),c[s].parentNode.insertBefore(l,c[s]);for(var r=document.createElement("ul"),d=0;d<c[s].getElementsByTagName("option").length;d++){var u=document.createElement("li"),h=document.createElement("a");u.v=c[s].getElementsByTagName("option")[d].value,u.elm=o,u.istrigger=l,h.href="#",h.appendChild(document.createTextNode(c[s].getElementsByTagName("option")[d].text)),u.onclick=function(){return this.elm.value=this.v,t(this.istrigger,"select--title active","select--title"),t(this.parentNode,"dropdownvisible_demo2","dropdownhidden_demo2"),this.istrigger.firstChild.nodeValue=this.firstChild.firstChild.nodeValue,!1},u.appendChild(h),r.appendChild(u)}a(r,"dropdownhidden_demo2");var p=document.createElement("div");p.appendChild(r),a(p,"select--body"),c[s].parentNode.insertBefore(p,c[s]),i[n]=c[s],n++}for(var m=document.getElementsByTagName("ul"),s=0;s<m.length;s++)if(e(m[s],"turnintoselect_demo2")){var f=document.createElement("form"),v=document.createElement("select");for(d=0;d<m[s].getElementsByTagName("a").length;d++){var g=document.createElement("option");g.value=m[s].getElementsByTagName("a")[d].href,g.appendChild(document.createTextNode(m[s].getElementsByTagName("a")[d].innerHTML)),v.appendChild(g)}v.onchange=function(){window.location=this.options[this.selectedIndex].value},f.appendChild(v),m[s].parentNode.insertBefore(f,m[s]),i[n]=m[s],n++}for(s=0;s<n;s++)i[s].parentNode.removeChild(i[s]);$(".select--title").click(function(){$(this).hasClass("active")?$(this).removeClass("active"):$(this).addClass("active")})}}var currentWidthWindow=document.documentElement.clientWidth,tabletSize=768,desktopSize=1024;$(document).ready(function(e){menu_gamburger(),show_search_form(),menu_all_products(),cart_button(),cart_change_value(),cart_remove_item(),cart_amount_items(),cart_all_sum(),select_button(),catalog_accordion_button(),catalog_accordion_remove_excess_button(),filters_button_mobile(),preset_button_catalog(),view_mode_catalog(),sort_mode_catalog(),product_accordion_button(),product_slider_correct_thumb()});