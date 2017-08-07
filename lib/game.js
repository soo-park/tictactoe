
// the actual game
var Game = function() {
  this.board = [['-', '-', '-'],['-', '-', '-'], ['-', '-', '-']]
  this.player1 = new Player(true);
  this.player2 = new Player(false);

  return "I won"
}

var Player = function(turn) {
  this.spot = [];
  this.turn = turn;
}

var a = new Player();