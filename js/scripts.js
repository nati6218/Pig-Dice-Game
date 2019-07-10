function Game(player1, player2, score){
  this.player1 = player1;
  this.player2 = player2;
  this.score = 0;

}

Game.prototype.roll = function(){

  var dice = Math.floor(Math.random() * 6) + 1;
  var score = dice + dice;
  console.log(dice);

  if (dice === 1){
    alert ("You lost! Sorry");
  }else {
    alert(score);
  }
}

// if (dice === 1) {
//   return "Game Over"
// } else{
//   this.score.push(dice);
//
// }

Game.prototype.stop = function(){
  if (this.score === 1){
    return "Sorry! you lost"
  };

}

Game.prototype.win = function(){
  if(this.score >= 100){
    return "Victory! Congratulations"
  }
}


$(document).ready(function(){
  var newGame = new Game('player1', 'player2', 0);
  $('#game').submit(function(event){
    event.preventDefault();

    var player1 = $('#player1')

    $('#points').show();


  });

  $('#play1, #play2').click(function(){
    newGame.roll();
  });

  $('#stop').click(function(){
    newGame.stop();
  });

});
