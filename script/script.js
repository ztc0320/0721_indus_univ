$(function(){
    $(".mainLi a").mouseover(function(){
        $(".subMenu").stop().slideDown(800);
        $("div#subMenuBG").stop().slideDown(800);
    });
    $(".mainLi a").mouseout(function(){
        $(".subMenu").stop().slideUp(300);
        $("div#subMenuBG").stop().slideUp(300);
    });
});