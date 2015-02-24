$(document).ready(function(){

  var $box_cell = $('.box_cell');
  Game.elementColor($box_cell);
  // var $box_row = $('.box_row');
  // Game.checkRowWin($box_row);
});

var Game = (function(){
  var player = 0;

  var elementColor = function(element){
  element.click(function(){
    if(player === 0){
    $(this).css('background-color', 'red');
    player = 1;
  // debugger;
    // console.log($(this).css('background-color'));
    }else{
      $(this).css('background-color', 'black');
      player = 0;
    };
    checkRowWin($(this).data('row'))
    checkColWin($(this).data('col'));
    })
  };

  var checkWinner = function(cellColorArr){
    if((cellColorArr[0] === cellColorArr[1]) && (cellColorArr[1] === cellColorArr[2])){
      alert('Player ' + player + " wins!");
      return(cellColorArr[0] + " wins!");
    }else{
      return(false);
    }
  };
  // var checkRowWin = function(row){
  // row.click(function(){
  //   var box_cells = $(this).children();
  //   var winCount = 0;
  //   var $cellColors = [];
  //   for(var j = 0; j < box_cells.size(); j++){
  //      $cellColors[j] = $(box_cells[j]).css('background-color');
  //    // console.log($(box_cells[j]).data('col'))
  //   };
  //   checkWinner($cellColors);
  //   });
  // };

  var checkRowWin = function(rowNum){
    var box_cells = $('.box_cell').filter(function() {return $(this).data("row") === rowNum });
    var winCount = 0;
    var $cellColors = [];
    for(var j = 0; j < box_cells.size(); j++){
       $cellColors[j] = $(box_cells[j]).css('background-color');
     // console.log($(box_cells[j]).data('col'))
    };
    checkWinner($cellColors);
  };

  var checkColWin = function(colNum){
    var box_cells = $('.box_cell').filter(function() {return $(this).data("col") === colNum });
    var winCount = 0;
    var $cellColors = [];
    for(var j = 0; j < box_cells.size(); j++){
       $cellColors[j] = $(box_cells[j]).css('background-color');
    };
    checkWinner($cellColors);
  };
  return{
    elementColor: elementColor,
    checkRowWin: checkRowWin
  };

})();
