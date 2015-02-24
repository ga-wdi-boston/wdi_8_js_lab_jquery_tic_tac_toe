// Your code here
// Use the jQuery
$(document).ready(function() {
  var turn = 0,
  $boxCell = $('.box_cell'),
  $dataCol = $(this).data().column,
  $dataRow = $(this).data().row;
  var $box1, $box2, $box3, $box4, $box5, $box6, $box7, $box8, $box9;

  $boxCell.on('click', function() {
    turn += 1
    if (turn % 2 === 0) {
      $(this).css('background-color', 'red');
      $(this).addClass('red');
    } else {
      $(this).css('background-color', 'black');
      $(this).addClass('black');
    };

    findWinner();
  });

  var findWinner = function() {

    $box1 = $('#box_0_0');
    $box2 = $('#box_0_1');
    $box3 = $('#box_0_2');
    $box4 = $('#box_1_0');
    $box5 = $('#box_1_1');
    $box6 = $('#box_1_2');
    $box7 = $('#box_2_0');
    $box8 = $('#box_2_1');
    $box9 = $('#box_2_2');

    if ($box1.attr('class') === 'box_cell red' && $box2.attr('class') === 'box_cell red' && $box3.attr('class') === 'box_cell red') {
      alert('Red wins!');
    } else if ($($box1).attr('class') === 'box_cell black' && $($box2).attr('class') === 'box_cell black' && $($box3).attr('class') === 'box_cell black') {
      alert('Black wins!');
    } else {
      console.log('else is happening');
    };

  };

});
