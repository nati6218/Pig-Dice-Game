function Game(player1, player2, score){
  this.player1 = player1;
  this.player2 = player2;
  this.score = score;

}

Game.prototype.roll = function(){

    var dice = Math.floor(Math.random() * 6) + 1;
    var score = [];
    console.log(dice);
  }

    // if (dice === 1) {
    //   return "Game Over"
    // } else{
    //   this.score.push(dice);
    //
    // }

Game.prototype.stop = function(){
  this.score = 1;
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

  $('#play1').click(function(){
    newGame.roll();
  })

});
