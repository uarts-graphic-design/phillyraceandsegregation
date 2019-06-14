$(document).ready(function(){

  var onOff = 0;

  $("#navMenu").hover(function(){
    $(".hamburgerBar").css("background-color", "#c51f30");
    }, function(){
    $(".hamburgerBar").css("background-color", "#654636");
  });

  $("#navMenu").click(function(){
    console.log(onOff);
    if (onOff==1) {
      $("#menuOverlay").hide();
      console.log("workoff");
      onOff=0;
    } else {
      $("#menuOverlay").show();
      console.log("turnOn");
      onOff=1;
    };
  });

  $(".menuItem").click(function(){
    $("#menuOverlay").hide();
    console.log("work")
    onOff=0;
  });



var update_loop = setInterval(Scroll, 1000); // one second updates

function Scroll(){
  var p = $(window).scrollTop(); // current scroll posistion
  var h = $(window).height();   // returns height of browser viewport

  console.log(p);
  console.log(h);

  if (h<p) {
    $("#topscroll").show();
    console.log("show");
  } else {
    $("#topscroll").hide();
  };

}

});
