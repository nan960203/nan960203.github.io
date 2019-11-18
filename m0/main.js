    $(document).ready(function(){
        $("#gnb a.dp1").click(function(){ //대메뉴를 클릭하면#gnb
            $(".sub").removeClass("on"); //서브메뉴 sub가on이라는 클래스를 삭제 모든서브메뉴 높이가 0px안보이게 
            $(this).next(".sub").addClass("on"); //대메뉴 바로뒤에오는 .sub서브메뉴에 on이라는 클래스를 addclass추가하라 높이가 125px 보이기하라
            $("#gnb a.dp1").removeClass("on"); //대메뉴의 on이라는 클래스를 일괄적으로 모든메뉴가 on을 삭제하라 
            $(this).addClass("on"); //내자신(지금 내가 클릭한 대메뉴) on을 추가하라
        });
        var wd = parseInt($(".vs").width());
        $(".btn_box li").click(function(){ //버튼박스 li를 클릭하면
            var idx = $(this).index(); //내자신(li)의 인덱스(0,1,2,3,4)를 idx라는 변수명으로 저장
            $(".img_box").not(":animated").animate({"margin-left" : wd*idx*-1+"px"}, 600); // 이미지박스는 animated제외시키고 
            $(".btn_box li").removeClass("on");
            $(this).addClass("on");
        });
    });    