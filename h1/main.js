//문서가 준비되면 실행
$(document).ready(function(){
   
    var intv = setInterval(function(){ ani();  }, 2900);
    function ani() {
       
       $(".slider").animate({"margin-left":"-1200px"}, 800, 
          function(){ 
            $(".slider li").eq(0).appendTo($(".slider"));  
            
            $(".slider").css("margin-left","0px");
       });
    }
});