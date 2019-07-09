function Game(player1, player2, score){
  this.player1 = player1;
  this.player2 = player2;
  this.score = score;

}

Game.prototype.roll = function(){

    var dice = Math.floor(Math.random());
    var score = [];

    for(var = dice; dice =>2; dice++){


    if (dice === 1) {
      return "Game Over"
    } else{
      this.score.push(dice);

    }
  }

Game.prototype.stop = function(){
  this.score = 1;
}
Game.prototype.win = function(){
  if(this.score >= 100){
    return "Victory! Congratulations"
  }
}


$(document).ready(function(){
  $('#game').click(function(event){
    event.preventDefault();
    

  });

});
