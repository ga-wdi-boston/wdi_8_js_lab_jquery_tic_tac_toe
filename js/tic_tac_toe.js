
$(document).ready(function(){
  var player = 0;
  var $box_cell = $('.box_cell');
  $elementRed($box_cell, player);

});

var $elementRed = function(element,player){
  // var unClickable = [];
  // unClickable.click(false);

  element.click(function(){

    if(player === 0){
    $(this).css('background-color', 'red');
    // unClickable.push('balls');
    player = 1;
    }
    else{
    $(this).css('background-color', 'blue');
    player = 0;
  };
  })
};
