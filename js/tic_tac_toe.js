var count = 0;
var blue_rows = [];
var red_rows = [];
var blue_columns = [];
var red_columns = [];
var $lFirst, $lSecond, $lThird, $rFirst, $rSecond, $rThird, $heading;

$(document).ready(function() {
  $cell = $('.box_cell');
  $lFirst = $('#box_0_0');
  $lSecond = $('#box_1_1');
  $lThird = $('#box_2_2');
  $rFirst = $('#box_2_0');
  $rSecond = $('#box_1_1');
  $rThird = $('#box_0_2');
  $heading = $('h1');
  $cell.on('click', setColor);
});

var changeBlue = function() {
  $(this).css('background-color', 'blue');
  $(this).addClass('blue');
  $(this).unbind('click');
  blue_rows.push($(this).data().row);
  blue_columns.push($(this).data().col);
};

var changeRed = function() {
  $(this).css('background-color', 'red');
  $(this).addClass('red');
  $(this).unbind('click');
  red_rows.push($(this).data().row);
  red_columns.push($(this).data().col);
};

var setColor = function() {
  count += 1;
  if (count % 2 === 0) {
    changeBlue.call($(this));
  } else {
    changeRed.call($(this));
  }
  checkWin();
};

var checkWin = function() {
  if (isThree(blue_rows) || isThree(blue_columns) || lDiag('blue') || rDiag('blue')) {
    $heading.text("Blue Wins!");
    $('*').unbind('click');
    $('table').css('background-color', '#6699FF');
  } else if (isThree(red_rows) || isThree(red_columns) || lDiag('red') || rDiag('red')) {
    $heading.text("Red Wins!");
    $('*').unbind('click');
    $('table').css('background-color', 'FF9999');
  } else if (red_rows.length === 5) {

  }
};

var isThree = function(array) {
  var result = [0, 0, 0];
  for (var i = 0; i < array.length; i++) {
    result[array[i]] += 1;
  }
  if (result.some(threes)) {
    return true;
  }
};

var threes = function(x) {
  return x === 3;
};

var lDiag = function(search) {
  if ($lFirst.hasClass(search) && $lSecond.hasClass(search) && $lThird.hasClass(search)) {
    return true;
  }
};

var rDiag = function(search) {
  if ($rFirst.hasClass(search) && $rSecond.hasClass(search) && $rThird.hasClass(search)) {
    return true;
  }
};
