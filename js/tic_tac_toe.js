 $(document).ready(function(){
 var $box_cell = $('.box_cell');

  var player_1 = function(turn, $box_cell){
   var turn = 1;
   turn += 2;
  $box_cell.on("click", function(){
       $(this).css('background-color', 'black');
       });
  var removeColor = function() {
    this.remove('background-color');
  }

 var player_2 = function(){
  var turn = 2;
   turn += 2;
  var $box_cell = $('.box_cell');
   $box_cell.on("click", function(){
        $(this).css('background-color', 'red');
      });
var removeColor = function() {
    this.remove('background-color');
  }

    return { player_1: player_1, player_2: player_2 };

});

var playerTurn = (function(){
  if (turn === odd_num);
    return player_1;
  else (turn === even_num);
    return player_2;
})();

//to determine a win,
//i could put the box_cell id into an array and then determine if the numbers in the array are certain combinations?
// must figure out how to tell that one player's colors match the array's below to say that they one.
//such as:
// [box_0_0, box_0_1, box_0_2] ||
// [box_1_0, box_1_1, box_1_2] ||
// [box_2_0, box_2_1, box_2_2] ||
// [box_0_0, box_1_0, box_2_0] ||
// [box_0_1, box_1_1, box_2_1] ||
// [box_0_2, box_1_2, box_2_2] ||
// [box_0_0, box_1_1, box_2_2] ||
// [box_0_2, box_1_1, box_2_0]

// try to keep track of things in an array
// switch case pattern?
//table to an array
// try not to allow double click on the same cell
