function func1(){

    //$(element name).action()
    //document.getElementByTagName(element name)

  //  $("div").css('background-color','orange');

  // its work with only one line of id p1, not in second line with same id
   // $("#p1").css('font-style','italic');

   //so for that we can use class
  // $(".para").css('font-style','italic');
  // $("#div1,#div2").css('background-color','green'); // you can use #div1,#div3 also, whatever you want 
   // $("#div1,li").css('background-color','purple');
   $("div > p").fadeToggle(); //you can also write("div p")without sign
   $("p:first").fadeToggle();
   $("li:even").fadeToggle();
   $("li:odd").fadeToggle();
}