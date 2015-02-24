//Try: change the color of just first box by its id
// $(document).ready(function(){
//   var $box_0_0 = $('#box_0_0');
//   $box_0_0.click(function(){
//     $box_0_0.css('background-color','red');
//   });
// }); //end document ready

//Try: display the color of the clicked box_cell & count number of clicks
// $(document).ready(function(){
//   var $box_cell = $('.box_cell');
//   var click_counter = 0;
//   var $display_counter = $('#display_counter');

//   $box_cell.on('click', function(){
//     if($(this).css('background-color') != 'rgb(170, 170, 170)'){
//       $(this).css('background-color', 'red');
//       click_counter += 1;
//       $display_counter.text(click_counter);
//       console.log($(this).css('background-color'));
//       console.log($(this).id);
//     } else {
//       $(this).css('background-color', 'black');
//       click_counter += 1;
//       $display_counter.text(click_counter);
//       console.log($(this).css('background-color'));
//     }
//   });
// }); //end document ready

//Try: alert if a box already has a 1 value otherwise set index of parent & box positions
// display the current state of the board in the console
// $(document).ready(function(){
// var display_board = function(obj){
//   $.each( obj, function( key, value ) {
//           console.log( key + ": " + value );
//         });
// };

//   var $box_cell = $('.box_cell');
//   var click_counter = 0;
//   var $display_counter = $('#display_counter');
//   var board =  [[0,0,0],[0,0,0],[0,0,0]];

//   $box_cell.on('click', function(){
//     var parent_position = $(this).parent().index();
//     var box_position = $(this).index();
//     if(board[parent_position][box_position] == 1){
//           alert("Box already clicked!");
//     } else {
//       board[parent_position][box_position] = 1;
//       click_counter += 1;
//       $display_counter.text(click_counter);
//     };

//     display_board(board);
//   });
// }); //end document ready
