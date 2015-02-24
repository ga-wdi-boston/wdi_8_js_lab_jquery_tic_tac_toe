// Your code here
// Use the jQuery
$(document).ready(function() {
  var turn = 0;
  var $boxCell = $('.box_cell');
  var $dataCol = $(this).data().column;
  var $dataRow = $(this).data().row;

  $boxCell.on('click', function() {
    turn += 1
    if (turn % 2 === 0) {
      $(this).css('background-color', 'red').attr('data-player', 'player1');
    } else {
      $(this).css('background-color', 'black').attr('data-player', 'player2');
    };
  });

  var checker = function() {
    var board = $('td');
    if (board[0].data-player === 'player1' && board[3].data-player === 'player1' && board[6].data-player === 'player1') {
      alert('player1 wins!');
    };

  };

});
