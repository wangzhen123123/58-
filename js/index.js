$(document).ready(function(){

    $(".start").children().hover(function(){
    //    $(this).children(".info").addClass("huachu")
       $(this).children(".info"). animate({bottom:"0px",opacity:"1"},1000);
    },function(){
        // $(this).children(".info").removeClass("huachu")
        $(this).children(".info"). animate({bottom:"-300px",opacity:"0"});
    })
    $(".commodity").hover(function(){
       $(this).addClass("hove").children("ul").css({"height":"auto"})
    },function(){
        $(this).removeClass("hove").children("ul").css({"height":"0"})
    })
    $("#erwei").hover(function(){
        $(this).siblings(".erweima").css({"display":"block"})
    },function(){
        $(this).siblings(".erweima").css({"display":"none"})
    })
})