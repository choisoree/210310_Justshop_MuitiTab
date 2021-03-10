$(function () {

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

});
