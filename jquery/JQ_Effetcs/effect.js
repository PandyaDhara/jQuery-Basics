$("document").ready(function(){

    $("#btn1").click(function(){
        $("#img1").hide(2000);
    })

    $("#btn2").click(function(){
        $("#img1").show(2000);
    })

    $("#btn3").click(function(){
        $("#img1").toggle(1000);
    })

    $("#btn4").click(function(){
        $("#img1").fadeIn(2000);  //like show
    })

    $("#btn5").click(function(){
        $("#img1").fadeOut(1000);  //like hide
    })

    $("#btn6").click(function(){
        $("#img1").fadeToggle(1000);
    })

    $("#btn7").click(function(){
        $("#img1").slideUp(1000);
    })

    $("#btn8").click(function(){
        $("#img1").slideDown(1000);
    })    

    $("#btn9").click(function(){
        $("#img1").slideToggle(1000);
    })

    $("#btn10").click(function(){
        $("#img1").stop(1000);
    })

});