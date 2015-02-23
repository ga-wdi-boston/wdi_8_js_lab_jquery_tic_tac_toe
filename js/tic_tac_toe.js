var board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]

$(document).ready(function() {

  var turnCounter = 1;

  var takeTurn = function() {
    if (!$(this).hasClass('used')){
        turnCounter % 2 === 0 ? redTurn($(this)) : blackTurn($(this));
        $(this).addClass('used');
        turnCounter++;
        checkBoard();
      }
  };

  var redTurn = function(cell){
    var row = cell.data().row;
    var col = cell.data().col;
    board[row][col] = 1;
    cell.css('background-color', 'red');
  };

  var blackTurn = function(cell){
    var row = cell.data().row;
    var col = cell.data().col;
    board[row][col] = -1;
    cell.css('background-color', 'black');
  };

  var checkRows = function() {
    for (var i = 0; i < 2; i++) {
      var total = board[i].reduce(sum);
      winnerCheck(total);
    }
  };

  var checkColumns = function() {
    for (var i = 0; i < 2; i++) {
      var total = board[0][i] + board[1][i] + board[2][i];                          ;
      winnerCheck(total);
    }
  };

  var checkDiagonals = function() {
    var diagonal1 = board[0][0] + board[1][1] + board[2][2];
    var diagonal2 = board[2][0] + board[1][1] + board[0][2];
    winnerCheck(diagonal1);
    winnerCheck(diagonal2);
  };

  var winnerCheck = function(total) {
      if (total === -3) {
          alert('BLACK WINS!');
      } else if (total === 3) {
          alert('RED WINS!');
      }
  };

  var sum = function(sum, current){
    return sum + current;
  };

  var checkBoard = function() {
    checkRows();
    checkColumns();
    checkDiagonals();
  };


  $('.box_cell').on('click', takeTurn);
});
