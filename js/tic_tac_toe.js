// Your code here
// Use the jQuery

$(document).ready(function(){
  var theGame = {};
  var $cell = $('.box_cell');
  var blah = elementColor($cell, theGame);
  // console.log(blah);

});

// $(document).ready(function(){
//   var $box_cell = $('.box_cell');
//   elementColor($box_cell);
//   var $box_row = $('.box_row');
//   checkRowWin($box_row);
//   var $data_col = $('data_col');
//   console.log($data_col);
//   debugger;
//   checkColWin($data_col);
// });


var elementColor = function(element, game){
  var count = 0;
  var color;
  element.click(function(){
    if (count < 8) {
      if (count % 2 === 0) {
        color = 'red';
        $(this).css('background-color', 'red');
        game[$(this)[count]] = color;
        // debugger;
      } else {
        // debugger;
        color = 'black';
        $(this).css('background-color', 'black');
        game[$(this)[count]] = color;
      }
      // debugger;
      count++;
      $(this).unbind('click');
        // debugger;
    } else {
      debugger;
    }

  });
  return game;
};

  // console.log(blah);

// var wins = function() {
//   var myReds = $(function () {
//     $('box_cell').filter(function () {
//       return $(this).css('background-color') == 'red';
//     })
//   });
// };

// function winnerCheck(n,color){
//     if(
//         (grid[0][0]==n && grid[0][1]==n && grid[0][2]==n) ||
//         (grid[1][0]==n && grid[1][1]==n && grid[1][2]==n) ||
//         (grid[2][0]==n && grid[2][1]==n && grid[2][2]==n) ||

//         (grid[0][0]==n && grid[1][0]==n && grid[2][0]==n) ||
//         (grid[0][1]==n && grid[1][1]==n && grid[2][1]==n) ||
//         (grid[0][2]==n && grid[1][2]==n && grid[2][2]==n) ||

//         (grid[0][0]==n && grid[1][1]==n && grid[2][2]==n)||
//         (grid[0][2]==n && grid[1][1]==n && grid[2][0]==n)


//         ){
//         boardMsg(playerName+" won the game!");
//         hasWinner = 1;
//         moveCount=0;
//         $("#playButton").text("Play again");
//         return true;
//     }
//     return false;
// }
// var color = $( this ).css( "background-color" );
// $( "#result" ).html( "That div is <span style='color:" +
//     color + ";'>" + color + "</span>." );

// var redcount = 0;
// var blackcount = 0;
// var stuff = $( this ).css( "background-color" );








// $( "#content" )
//     .find( "h3" )
//     .eq( 2 )
//         .html( "new text for the third h3!" )
//         .end() // Restores the selection to all h3s in #content
//     .eq( 0 )
//         .html( "new text for the first h3!" );


// $('.MyClass').size()

// $( ".box_row" ).find( "" )


//   $(document).ready(function(){
//   var $box_cell = $('.box_cell');
//   elementColor($box_cell);
//   var $box_row = $('.box_row');
//   checkRowWin($box_row);
//   var $data_col = $('data_col');
//   console.log($data_col);
//   debugger;
//   checkColWin($data_col);
// });



// var checkRowWin = function(row){
//   row.click(function(){
//     var box_cells = $(this).children();
//     var winCount = 0;
//     var $cellColors = [];
//     for(var j = 0; j < box_cells.size(); j++){
//        $cellColors[j] = $(box_cells[j]).css('background-color');
//     };
//     if(($cellColors[0] === $cellColors[1]) && ($cellColors[1] === $cellColors[2])){
//       alert($cellColors[0] + "wins!");
//       debugger;
//     };
//   })
// };

// var checkColWin = function(col){
//   col.click(function(){

//   })
// }


// $.each($('th.currency'),function(idx,val) {
// $.each($('data-col'),function() {

//     var table = $(this).parent().parent();
//     var colNumber = $(this).parent("tr").children().index($(this));
//     var rows = table.children("tr");
//     rows.find("td:nth-child(" + (colNumber + 1) + ")").addClass("currency");

// });


// $(function(){ //DOM Ready
//   var col = $(".box_cell, data-col")[index];
// var $col = $('.box_cell').filter(".box_cell, data-col")[index];
// });




// document.getElementsByTagName("li")[0];
