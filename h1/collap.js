$(document).ready(function(){
    
    /*토글버튼*/
    $(".lstBtnFrame").click(function(){
        $(".lstFrame").animate({"left":"0"},1000);
        $("body, html").css("overflow","hidden");
    });
    
    /*닫기버튼*/
    $(".closeBtn").click(function(){
        $(".lstFrame").animate({"left":"-110%"},1000);
        $("body, html").css("overflow","auto");
        $("body, html").css("overflow-x","hidden");
    });
    
    $(".contactBtnFrame").click(function(){
        $(".contactFrame").animate({"right":"0"},1000);
        $("body, html").css("overflow","hidden");
    });
    
    $(".closeBtn2").click(function(){
        $(".contactFrame").animate({"right":"-110%"},1000);
        $("body, html").css("overflow","auto");
        $("body, html").css("overflow-x","hidden");
    });
});