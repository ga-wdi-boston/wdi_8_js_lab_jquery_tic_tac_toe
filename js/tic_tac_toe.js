var count = 0;
var blue_rows = [];
var red_rows = [];
var blue_cols = [];
var red_cols = [];
var $lFirst, $lSecond, $lThird, $rFirst, $rSecond, $rThird, $h1, $star;

$(document).ready(function(){
  var $circle = $('.box_cell');
  $lFirst = $('#box_0_0');
  $lSecond = $('#box_1_1');
  $lThird = $('#box_2_2');
  $rFirst = $('#box_2_0');
  $rSecond = $('#box_1_1');
  $rThird = $('#box_0_2');
  $h1 = $('h1');
  $star = $('*');
  $circle.on('click', setColor);
});

var goBlue = function(){
  $(this).css('background-color', 'blue');
  $(this).addClass('blue');
  $(this).unbind('click');
  blue_rows.push($(this).data().row);
  blue_cols.push($(this).data().col);
};

var goRed = function(){
  $(this).css('background-color', 'red');
  $(this).addClass('red');
  $(this).unbind('click');
  red_rows.push($(this).data().row);
  red_cols.push($(this).data().col);
};

var setColor = function(){
  count += 1;
  if (count % 2 === 0) {
    goBlue.call($(this));
  } else {
    goRed.call($(this));
  }
  checkWin();
};

var checkWin = function() {
  if (isThree(blue_rows) || isThree(blue_cols) || lDiag('blue') || rDiag('blue')) {
    $('#main_container').css('background-color', 'aqua');
    $h1.text('Blue wins!');
    $star.unbind('click');
  } else if (isThree(red_rows) || isThree(red_cols) || lDiag('red') || rDiag('red')){
    $('#main_container').css('background-color', 'tomato');
    $h1.text('Red wins!');
    $star.unbind('click');
  } else if (red_rows.length === 5) {
    $h1.text('Tie');
  }
};

var isThree = function(array){
  var result = [0,0,0];
  for (var i = 0; i < array.length; i++) {
    result[array[i]] += 1;
  }
  if(result.some(threes)){
    return true;
  } else {
    return false;
  }
};

var threes = function(x){
  return x === 3;
};

var lDiag = function(search){
  if ($lFirst.hasClass(search) && $lSecond.hasClass(search) && $lThird.hasClass(search)) {
    return true;
  } else {
    return false;
  }
};

var rDiag = function(search){
  if ($rFirst.hasClass(search) && $rSecond.hasClass(search) && $rThird.hasClass(search)) {
    return true;
  } else {
    return false;
  }
};
