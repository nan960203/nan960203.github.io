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
        activateScene();/* 함수실행 */ 
        function activateScene(){//함수 정의 
            var $content = $('#scene-content'),
                 $charts = $content.find('.chart');
         
            //원형 차트 당 처리    
            $charts.each(function(){
                var $chart = $(this),
                    //마스크 를 저장하고 각도 0도로 지정
                    $circleLeft= $chart.find('.left .circle-mask-inner').css({transform:'rotate(0)'}),
                    $circleRight= $chart.find('.right .circle-mask-inner').css({transform:'rotate(0)'}),
                    //백분율  취득
                     $percentNumber=$chart.find('.percent-number'),
                    percentdata=$percentNumber.text();
          
                 //백분율 표시를 일단 0      
                   $percentNumber.text(0);
                
                //각도 애니메이션
                 $({percent:0}).delay(1000).animate({percent:percentdata},{//시간정의,프로그래스 정의
                     duration:1500,
                     progress:function(){
                      var now =this.percent,//내 %가지고 와서 now에저장
                        deg = now*360/100,//90*360/100
                        degRight=Math.min(Math.max(deg,0),180),
                         degLeft=Math.min(Math.max(deg - 180,0),180);
                         $circleRight.css({transform:'rotate(' + degRight + 'deg)'});
                         $circleLeft.css({transform:'rotate(' + degLeft + 'deg)'});
                         $percentNumber.text(Math.floor(now));
                         
                     } 
                 }); 
            });
        }
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
        