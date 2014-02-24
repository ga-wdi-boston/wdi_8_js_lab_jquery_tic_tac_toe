// Your code here
// Use the jQuery

$(function(){

});


var TicTacToe = {};

TicTacToe.boardReset = (function(){
  this.board = [
    [,,,],
    [,,,],
    [,,,]
    ];
})();

// alternate player on click and assign starting player
TicTacToe.changePlayer = (function(){
  this.player = 0;
  return function(){
    if (this.player === 0) {
      this.player = 1;
    } else {
      this.player = 0;
    }
  }
})();

// returns true if there is a winning pattern
TicTacToe.win = function(){
  var solution1, solution2, solution3, solution4, solution5, solution6,
    solution7, solution8;

  // solutions as booleans
  solution1 = this.board[0][0] === this.board[0][1] === this.board[0][2];
  solution2 = this.board[1][0] === this.board[1][1] === this.board[1][2];
  solution3 = this.board[2][0] === this.board[2][1] === this.board[2][2];
  solution4 = this.board[0][0] === this.board[1][0] === this.board[2][0];
  solution5 = this.board[0][1] === this.board[1][1] === this.board[2][1];
  solution6 = this.board[0][2] === this.board[1][2] === this.board[2][2];
  solution7 = this.board[0][0] === this.board[1][1] === this.board[2][2];
  solution8 = this.board[0][2] === this.board[1][1] === this.board[2][0];

  // if any true, return true
  return solution1 || solution2 || solution3 || solution4 || solution5 ||
    solution6 || solution7 || solution8;
};

TicTacToe.move = function(element){
  var row, col;
  // Find col and row of piece clicked
  row = parseInt(element.getAttribute('data-row'));
  col = parseInt(element.getAttribute('data-col'));

  this.board[row][col] = this.player;

  // Check if there is a win
  if ( TicTacToe.win() ) {
    // message to congratulate
    this.msg = 'Player ' + this.player + ' Wins!';

    // div that appears with msg and deactive board clicking
    return true;
  } else {
    // We change the player
    TicTacToe.changePlayer();
    return true;
  }
};



// Assign event handlers
TicTacToe.init = function(){
  // Assign event listener to row
  $('.box_row')
};





