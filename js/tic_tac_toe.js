$(document).ready(function(){
  $('.box_cell').on('click', game.changeTurn);
});


var game = (function(){
  var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  var turnCounter = 1;

  var changeTurn = function(){
    if(!$(this).hasClass('used')){
      turnCounter % 2 === 0 ? playerTwoTurn($(this)): playerOneTurn($(this));
      $(this).addClass('used');
      turnCounter++;
      checkCells();
    }
  };

   var playerOneTurn = function(cell){
    var col = cell.data().col;
    var row = cell.data().row;
    board[row][col] = 1;
    cell.css('background-color', 'black');
  };

   var playerTwoTurn = function(cell){
    var col = cell.data().col;
    var row = cell.data().row;
    board[row][col] = -1;
    cell.css('background-color', 'red');
  };



  return {
    changeTurn : changeTurn
  }
})();


