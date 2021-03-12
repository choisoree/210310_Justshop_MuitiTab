$(function () {

    setInterval (fuslide, 3000);

    function fuslide() {

        $("#slideFrame").animate({"margin-left":"-1200px"},
        2000,
        function(){

            $("#slideFrame>a:first-child").insertAfter("#slideFrame>a:last-child");

            $("#slideFrame").css({"margin-left":"0"});


        });
    }



    $("#gnb>ul#mainmenu>li").mouseover(function(){
        $(".submenu").stop().slideDown(1000);

//               $(this).children("ul").css({
//                   "border":"1px solid #bbb",
//                   "border-top":"none"
//               });
    });

     $("#gnb>ul#mainmenu>li").mouseout(function(){
        $(".submenu").stop().slideUp(500);

    });



    $("button#tabBtn1").click(function () {

        //       버튼모양 변경 시작
        $("button").css({
            "border":"none",
            "top":"0px"
        });

        $(this).css({
            "border":"1px solid #bbb",
            "border-bottom":"none",
            "top":"1px"
        });


        //        내용변경시작
        $("div#tabContents1").css({
            "display": "block"
        });
        $("div#tabContents2").css({
            "display": "none"
        });
    });

    $("button#tabBtn2").click(function () {

         //       버튼모양 변경 시작
        $("button").css({
            "border":"none",
            "top":"0px"
        });

        $(this).css({
            "border":"1px solid #bbb",
            "border-bottom":"none",
            "top":"1px"
        });

        //        내용변경시작
        $("div#tabContents1").css({
            "display": "none"
        });
        $("div#tabContents2").css({
            "display": "block"
        });
    });

///////////////레이어 팝업 시작//////////////
    $("a.modalpoint").click(function(){
        $("#layerBG").css({"display":"block"});
    });
    $("#closeBtn").click(function(){
        $("#layerBG").css({"display":"none"});
    });
///////////////레이어 팝업 끝//////////////

});
