$("document").ready(function(){

    $("#btn").click(function(){
        $("#img").animate({
            left: '150px',
            opacity: '1',
            height: '400px',
            width: '700px'
        },'slow')
    })

});