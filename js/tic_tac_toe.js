$(document).ready(function(){
  var $box_cell = $('.box_cell');
  Game.boxClick($box_cell);
});



var Game = (function(){
  var player = 0;

  var boxClick = function(box_cell){
    box_cell.one('click',function(){
      _cellColor($(this));
      _checkRowWin($(this).data('row'));
      _checkColWin($(this).data('col'));
      _checkDiagWin($(this));
      // $(this).bind("click", _cellColor)
     });
  };

  var _cellColor = function(box_cell){
    if(player === 0){
      $(box_cell).css('background-color', 'red');
      player = 1;
    }else{
      $(box_cell).css('background-color', 'black');
      player = 0;
    };
  };

  var _checkDiagWin = function(box_cell){
    if($(box_cell).data('col')===$(box_cell).data('row')){
      _checkDiagWinLeft();
      };
    //  debugger;
    if($(box_cell).data('col')+$(box_cell).data('row') === 2){
    _checkDiagWinRight();
    };
  };

  var _checkWinner = function(cellColorArr){
    if((cellColorArr[0] === cellColorArr[1]) && (cellColorArr[1] === cellColorArr[2])){
      alert('Player ' + player + " wins!");
      // $( ".box_cell" ).unbind( "click", _cellColor );
      return(cellColorArr[0] + " wins!");
    }else{
      return(false);
    }
  };

  var _checkDiagWinLeft = function(){
    var box_cells = $('.box_cell').filter(function() {return $(this).data("row") === $(this).data("col")});
    //debugger;
    var winCount = 0;
    var $cellColors = [];
    for(var j = 0; j < box_cells.size(); j++){
       $cellColors[j] = $(box_cells[j]).css('background-color');
     // console.log($(box_cells[j]).data('col'))
    };
    _checkWinner($cellColors);
  };

  var _checkDiagWinRight = function(){
  var box_cells = $('.box_cell').filter(function() {return $(this).data("row") + $(this).data("col") === 2});
  var winCount = 0;
    var $cellColors = [];
    for(var j = 0; j < box_cells.size(); j++){
       $cellColors[j] = $(box_cells[j]).css('background-color');
     // console.log($(box_cells[j]).data('col'))
    };
    _checkWinner($cellColors);
  };

  var _checkRowWin = function(rowNum){
    var box_cells = $('.box_cell').filter(function() {return $(this).data("row") === rowNum });
    var winCount = 0;
    var $cellColors = [];
    for(var j = 0; j < box_cells.size(); j++){
       $cellColors[j] = $(box_cells[j]).css('background-color');
     // console.log($(box_cells[j]).data('col'))
    };
    _checkWinner($cellColors);
  };

  var _checkColWin = function(colNum){
    var box_cells = $('.box_cell').filter(function() {return $(this).data("col") === colNum });
    var winCount = 0;
    var $cellColors = [];
    for(var j = 0; j < box_cells.size(); j++){
       $cellColors[j] = $(box_cells[j]).css('background-color');
    };
    _checkWinner($cellColors);
  };
  return{
    boxClick: boxClick
  };

})();



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
