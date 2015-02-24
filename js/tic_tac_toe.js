// Your code here
// Use the jQuery
$(document).ready(function() {

var count = 0
var $box_cell = $('.box_cell');


$box_cell.click(function(){
  count += 1
  if (count % 2 === 0){
    $(this).css("background-color", 'red').attr('data-player', 'player1');
} else {
    $(this).css('background-color', 'blue').attr('data-player', 'player2');
}
});

var board = [];
var $td = $('#td');
board.push($td);





})


