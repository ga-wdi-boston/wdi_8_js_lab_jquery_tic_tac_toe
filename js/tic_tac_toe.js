// Your code here
// Use the jQuery

$(document).ready(function(){
var click_counter = 0;
var $display_counter = $('#display_counter');
var board =  [[0,0,0],[0,0,0],[0,0,0]];
var $box_cell = $('.box_cell');

//function to display the current state of the board in the console
var display_board = function(obj){
  $.each( obj, function( key, value ) {
          console.log( key + ": " + value );
        });
};

  $box_cell.on('click', function(){
    var parent_position = $(this).parent().index();
    var box_position = $(this).index();

    if(board[parent_position][box_position] != 0){
        alert("Box already clicked! Please click another box.");
      } else {
        if(click_counter % 2 == 0){
          board[parent_position][box_position] = 'red';
          click_counter++;
          $display_counter.text(click_counter);
          $(this).css('background-color', 'red');
        } else {
          board[parent_position][box_position] = 'black';
          click_counter++;
          $display_counter.text(click_counter);
          $(this).css('background-color', 'black');
        }; //else

        display_board(board);
      }; //else

  }); //end box_cell on click

}); //end document ready



// switch (eval_winner)
// {
//   case 1: statement;
//             break;
//   case 2: statement;
//             break;
//   case 3: statement;
//             break;
//   case 4: statement;
//             break;
//   case 5: statement;
//             break;
//   default:  statement;
// }

