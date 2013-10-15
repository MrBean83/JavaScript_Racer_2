$(document).ready(function(){

  var isGameOver = false

  function gameOn(){
    $("#countdown").fadeIn();

    setTimeout(function(){
      $("#countdown").html("<h2>GO! GO! GO! </h2>");
      
      movePlayerOne = function(){
      var current = $("#player1-strip .active");
      var next = $(current).next();
      if(current.hasClass("won")){
        gameOver("Player 1");
      }
      else if (isGameOver == false){
      next.addClass("active");
      current.removeClass("active");
     }
    };

    movePlayerTwo = function(){
      var current = $("#player2-strip .active");
      var next = $(current).next();
      if(current.hasClass("won")){
        gameOver("Player 2");
      }
      else if (isGameOver == false){
        next.addClass("active");
        current.removeClass("active");
      };

    }

    $(document).on("keyup", function(event){
      if(event.which == 38){
        movePlayerOne();
      }
      else if(event.which == 40){
        movePlayerTwo();
      }
    });

    function gameOver(player){
      isGameOver = true
      confirm(player + " has won!!! \n Play again?");
      window.location.reload();
    } 
      }, 2000);
  };

  $("#start-game").on("click", function(){
    gameOn();
  });


})
