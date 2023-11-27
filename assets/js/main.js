window.onload = function() {
    
 
  // var hamBut = document.getElementById('hamb');


  
  $("#hamb").click(function(){
    $("#respNav").toggle(700);
  })
  

   
  $("#exitNav").click(function(){
    $("#respNav").toggle(700);
  })


  $(window).on('resize', function(event){
    var windowWidth = $(window).width();
        if(windowWidth > 1000){
           $("#respNav").hide(500);
        }
   })

   
  }