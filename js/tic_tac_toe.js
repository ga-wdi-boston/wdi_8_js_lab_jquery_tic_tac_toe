// Your code here
// Use the jQuery

$(function(){
  TicTacToe.init();
});


var TicTacToe = {};

TicTacToe.board = [
    [,,],
    [,,],
    [,,]
    ];

TicTacToe.boardReset = function(event) {
  event.preventDefault();
  this.board = [
    [,,],
    [,,],
    [,,]
    ];
  $('#win-msg').hide();
  $('.player-1').removeClass('player-1');
  $('.player-0').removeClass('player-0');
}

TicTacToe.player = 0;

// alternate player on click and assign starting player
TicTacToe.changePlayer = function(){
  if (this.player === 0) {
    this.player = 1;
  } else {
    this.player = 0;
  }
};

// returns true if there is a winning pattern
TicTacToe.win = function(){
  var solution1, solution2, solution3, solution4, solution5, solution6,
    solution7, solution8;

  // solutions as booleans
  solution1 = this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2] && this.board[0][2] !== undefined;
  solution2 = this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2] && this.board[1][2] !== undefined;
  solution3 = this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2] && this.board[2][2] !== undefined;
  solution4 = this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0] && this.board[2][0] !== undefined;
  solution5 = this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1] && this.board[2][1] !== undefined;
  solution6 = this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2] && this.board[2][2] !== undefined;
  solution7 = this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[2][2] !== undefined;
  solution8 = this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[2][0] !== undefined;

  // if any true, return true
  return solution1 || solution2 || solution3 || solution4 || solution5 ||
    solution6 || solution7 || solution8;
};

// Event handlers
TicTacToe.move = function(event){
  var row, col, element;

  element = $(event.target);

  if ( element.hasClass('player-1') || element.hasClass('player-0') ) {
    return false;
  } else {
    element.addClass('player-' + this.player);
    // Find col and row of piece clicked
    row = parseInt(element.attr('data-row'));
    col = parseInt(element.attr('data-col'));

    this.board[row][col] = this.player;

    // Check if there is a win
    if ( TicTacToe.win() ) {
      // message to congratulate
      $('#win-msg').show();
      $('#msg').html('Player ' + this.player + ' Wins!');

      // div that appears with msg and deactive board clicking
      return true;
    } else {
      // We change the player
      TicTacToe.changePlayer();
      return true;
    }
  }
};



// Assign event handlers
TicTacToe.init = function(){
  // Assign event listener to row
  $('.box_row').on('click', TicTacToe.move.bind(this));
  $('#play-again').on('click', TicTacToe.boardReset.bind(this));
};





