/* 
its for where we write onclick method in html file
function func1(){
    document.getElementById("img1").style.width="500px";
} */ 

/* $("button").click(func1);
function func1(){
    $("#img1").css('width','500px')
} */

//we also do this with no function name
/* $("button").click(function(){
    $("#img1").css('width','500px')
}); */

/* 
write js code in this ,for befor button click show
$("document").ready(function(){

}); */

$("document").ready(function(){

    //we put code in this ready function
    //if we want double click then ("button").dblclick lkhvu
 /*   $("button").click(function(){  
        $("#img1").css('width','500px')
    }); */

    //mouse enter and leave event

  /*  $("#img1").mouseenter(function(){
        $("#img1").css('width','350px');
    });
    
    $("#img1").mouseleave(function(){
        $("#img1").css('width','250px');
    });  */

    $("#img1").hover(func1,func2)
    function func1(){
        $("#img1").css('width','400px');
    }
    function func2(){
        $("#img1").css('width','250px');
    }

});

