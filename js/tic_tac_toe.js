$(document).ready(function(){

var $box_cell = $('.box_cell');
takeTurns.spotColor($box_cell);
var playerZero = [];
var playerOne = [];
$one = $('#box_0_0');
$two = $('#box_0_1');
$three = $('#box_0_2');
$four = $('#box_1_0');
$five = $('#box_1_1');
$six = $('#box_1_2');
$seven = $('#box_2_0');
$eight = $('#box_2_1');
$nine = $('#box_2_2');
});

var validWins = [ [one, two, three], [four, five, six], [seven, eight, nine],
                  [one, four, seven], [two, five, eight], [three, six, nine],
                  [one, five, nine], [three, five, seven] ],

var takeTurns = (function(){
  var player = 0;

  var spotColor = function(spot){
  spot.click(function(){
    if(player === 0){
      $(this).css('background-color', 'red');
      playerZero.push($this);
      $(this).unbind('click');
      player = 1;
    }
    else{
      $(this).css('background-color', 'blue');
      playerOne.push($this);
      $(this).unbind('click');
      player = 0;
    };
    })
  };

})();












// $(document).ready(function(){
//   var player = 0;
//   var $box_cell = $('.box_cell');
//   $elementRed($box_cell, player);

// });

// var $elementRed = function(element,player){
//   // var unClickable = [];
//   // unClickable.click(false);

//   element.click(function(){

//     if(player === 0){
//     $(this).css('background-color', 'red');
//     // unClickable.push('#this');
//     player = 1;
//     }
//     else{
//     $(this).css('background-color', 'blue');
//     player = 0;
//   };
//   })
// };
