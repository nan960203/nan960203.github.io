$(document).ready(function() {
            $("html,body").animate({scrollTop:"0"});//제일 상단페이지부터 시작하게 실행 , 초기값은 0
            $("a.menu1, a.menu_btn1").on("click",function(){
                $("html,body").animate({scrollTop:"0"},1000);
                $("a").removeClass("select"); //메뉴
                $("a.menu1").addClass("select");
                  $("a").removeClass("select2"); //버튼
                $("a.menu_btn1").addClass("select2");
                return false;
            });
            $("a.menu2, a.menu_btn2").on("click",function(){
                 $("html,body").animate({scrollTop:$("#menu2").offset().top},1000);
                $("a").removeClass("select"); //메뉴
                $("a.menu2").addClass("select");
                  $("a").removeClass("select2"); //버튼
                $("a.menu_btn2").addClass("select2");
                return false;
            });
            $("a.menu3, a.menu_btn3").on("click",function(){
                 $("html,body").animate({scrollTop:$("#menu3").offset().top},1000);
                $("a").removeClass("select"); //메뉴
                $("a.menu3").addClass("select");
                  $("a").removeClass("select2"); //버튼
                $("a.menu_btn3").addClass("select2");
                return false;
            });
            $("a.menu4, a.menu_btn4").on("click",function(){
                $("html,body").animate({scrollTop:$("#menu4").offset().top},1000);
                $("a").removeClass("select"); //메뉴
                $("a.menu4").addClass("select");
                  $("a").removeClass("select2"); //버튼
                $("a.menu_btn4").addClass("select2");
                return false;
            });
        });
        
     
       
     $(document).ready(function(){
       $('.gr_ps').delay(1000).animate({width: '80%'},2000);
       $('.gr_html').delay(1000).animate({width: '75%'},2000);
       $('.gr_jq').delay(1000).animate({width: '50%'},2000);
          $('.gr_il').delay(1000).animate({width: '70%'},2000);
     });

        
        
 
     $(document).ready(function(){
      $('#mixItUp').mixItUp({
          selector:{filter:'.filter'}
      });
     });
        
  $(document).ready(function(){
   
        
        
        
          $('#mixItUp div').click(function(){
            $('#modal_pop').show(0)
        
            var this_num=$(this).attr('data-myorder');
            
            $('#modal_pop .image_box .img_box').show(0).html("<img src='./img/mx_img"+this_num+".jpg'>");
           
            
            var this_src=$(this).attr('src');
            var this_on=$(this).attr('onClick');
            $('#modal_pop .image_box .img_btn').show(0).html(
            "<a href='"+this_src+"' onClick'"+this_on+"' target='_blank'>MORE</a>");

//        return false;
           
    });

              
    $('.close_btn').click(function(){
        $('#modal_pop').hide(0)
    });
     });
        