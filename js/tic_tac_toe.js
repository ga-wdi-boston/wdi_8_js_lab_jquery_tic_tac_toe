$(document).ready(function(){
  var board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
  var $box_cell = $('box_cell');
  var player = 0;
  $Game($box_cell, player);
});

var $Game = function(boxcell,player){

boxcell.click(function(){
  if(player == 0){
    $(this).css('background-color', 'green');
    }
    else{
    $(this).css('background-color', 'blue');
  };
  })
};
