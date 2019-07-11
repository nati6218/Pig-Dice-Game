function Game(player1score, player2score, passTurn, score){
  this.player1score = player1score;
  this.player2score = player2score;
  this.passTurn = passTurn;
  this.score = 0;

}

Game.prototype.roll = function() {

  var dice = Math.floor(Math.random() * 6) + 1;
  this.player1score += dice;
  this.player2score += dice;

  if (dice === 1){
    alert ("You lost! Sorry");
  }
}

// if (dice === 1) {
//   return "Game Over"
// } else{
//   this.score.push(dice);
//
// }
Game.prototype.stop= function(){
  this.score += this.passTurn
  this.passTurn = 0;
}

Game.prototype.win = function(){
  if(this.player1score >= 100){
    return "Victory! Congratulations"
  }
}


$(document).ready(function(){
  var newGame = new Game(0, 0, 0, 0);


  $('#game').submit(function(event){
    event.preventDefault();


  });

  $('#play1').click(function(){
    newGame.roll();
    newGame.win();
    $('.points1').text(newGame.player1score);

  });
  
  $('#play2').click(function(){
    newGame.roll();
    newGame.win();
    $('.points2').text(newGame.player2score);

  });


  $('.stop').click(function(){
    newGame.stop(alert("Pass"));
  });

});
