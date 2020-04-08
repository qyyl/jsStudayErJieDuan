/**
 * Created by Administrator on 2020/4/8 0008.
 */
;
$(".yiJiUl>li>p").click(function () {
    var thisHeight = parseInt($(this).next().css("height"))
        $(".sanJiUl").css("height","0px");
        $(".erJiUl").css("height","0px");
        if (thisHeight==0){
            $(this).next().css("height","auto");
        }else {
            $(this).next().css("height","0");
        }
})
$(".erJiUl>li>p").click(function () {
    var thisHeight = parseInt($(this).next().css("height"))
    $(".sanJiUl").css("height","0px");
    if (thisHeight==0){
        $(this).next().css("height","auto");
    }else {
        $(this).next().css("height","0");
    }
})
