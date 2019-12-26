 $(document).ready(function(){
       var ck1 = true, ck2 = true;  
        //펼침 메뉴의 열기/닫기 모션
       $(".lst_btn").click(function(){
             if(ck1){
                 $(".collap").addClass("on");
                 $(".lst_btn").addClass("on");
             } else {
                 $(".collap").removeClass("on");
                 $(".lst_btn").removeClass("on");
             }
             ck1 = !ck1;
       }); 
       //펼침 메뉴의 서브메뉴 열기
       $(".collap li").click(function(){
           $(".collap li").removeClass("on");
           $(this).addClass("on");
       }); 
         //스크롤시 메인 메뉴 모션    
       $(window).scroll(function(){
          var sc_top = parseInt($("body, html").scrollTop());
            if(sc_top>=500 && sc_top<5200){
                $(".header").addClass("on");
                $(".header").removeClass("off");
            } else if(sc_top>=5200) {
                $(".header").removeClass("on");
                $(".header").addClass("off");                      
            } else {
                $(".header").removeClass("on");
                $(".header").removeClass("off");
            } 
       }); 
      $(document).ready(function(){
         var sc_pg=parseInt($(window).height())
         $(window).on('mousewheel',function(e){
             if(e.originalEvent.wheelDelta<0){
                $('html,body').not(':animated').animate({
                    scrollTop:'+='+sc_pg+'px'
                },800);
                }else{
                $('html,body').not(':animated').animate({
                     scrollTop:'-='+sc_pg+'px'
                },800);
                }
            return false; 
         });//$(window).on('mousewheel'
     });
     //function(e): 이벤트핸들러에 전달될 이벤트 객체에 대한 짧은 var 참조     