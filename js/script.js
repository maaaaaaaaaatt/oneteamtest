 //Responsive Top Nav
 function responsiveNav() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
 }
 //end responsive top nav

 //Replace Text function		
 $(function () {
     count = 0;
     wordsArray = ["CREATES OPPORTUNITIES.", "MAKES MOMENTS HAPPEN.", "CHANGES THE GAME."];
     setInterval(function () {
         count++;
         $("#word").fadeOut(1250, function () {
             $(this).text(wordsArray[count % wordsArray.length]).fadeIn(1000);
         });
     }, 3000);
 });
 //End Replace Text function

