var $lFirst, $lSecond, $lThird, $rFirst, $rSecond, $rThird, $h1, $star, $circle, $toggle;
var count, blue_rows, red_rows, blue_cols, red_cols;

$(document).ready(function(){
  TicTacToe.init();
  $circle.on('click', TicTacToe.move);
  $toggle.on('click', TicTacToe.player)
});

var TicTacToe = (function(){

  var init = function(){
    $circle = $('.box_cell');
    $lFirst = $('#box_0_0');
    $center = $('#box_1_1');
    $lThird = $('#box_2_2');
    $rFirst = $('#box_2_0');
    $rThird = $('#box_0_2');
    $h1 = $('h1');
    $star = $('*');
    $toggle = $('#toggle');
    count = 0;
    blue_rows = [];
    red_rows = [];
    blue_cols = [];
    red_cols = [];
  };

  var _goBlue = function(){
    $(this).css('background-color', 'blue');
    $(this).addClass('blue');
    $(this).unbind('click');
    blue_rows.push($(this).data().row);
    blue_cols.push($(this).data().col);
  };

  var _goRed = function(){
    $(this).css('background-color', 'red');
    $(this).addClass('red');
    $(this).unbind('click');
    red_rows.push($(this).data().row);
    red_cols.push($(this).data().col);
  };

  var move = function(){
    _setColor.call($(this));
    if (_ai()){
      _compMove();
    }
  };

  var _setColor = function(){
    count += 1;
    if (count % 2 === 0) {
      _goBlue.call($(this));
    } else {
      _goRed.call($(this));
    }
    _checkWin();
  };

  var _checkWin = function() {
    if (_isThree(blue_rows) || _isThree(blue_cols) || _lDiag('blue') || _rDiag('blue')) {
      $('#main_container').css('background-color', 'aqua');
      $h1.text('Blue wins!');
      $star.unbind('click');
    } else if (_isThree(red_rows) || _isThree(red_cols) || _lDiag('red') || _rDiag('red')){
      $('#main_container').css('background-color', 'tomato');
      $h1.text('Red wins!');
      $star.unbind('click');
    } else if (red_rows.length === 5) {
      $h1.text('Tie');
    }
  };

  var _isThree = function(array){
    var result = [0,0,0];
    for (var i = 0; i < array.length; i++) {
      result[array[i]] += 1;
    }
    if(result.some(_threes)){
      return true;
    }
  };

  var _threes = function(x){
    return x === 3;
  };

  var _lDiag = function(search){
    if ($lFirst.hasClass(search) && $center.hasClass(search) && $lThird.hasClass(search)) {
      return true;
    }
  };

  var _rDiag = function(search){
    if ($rFirst.hasClass(search) && $center.hasClass(search) && $rThird.hasClass(search)) {
      return true;
    }
  };

  var player = function(){
    if ($(this).hasClass('player')){
      $(this).text('Vs. AI');
      $(this).toggleClass('player');
    } else {
      $(this).text('2-Player');
      $(this).toggleClass('player');
    }
  };

  var _ai = function(){
    if ($toggle.hasClass('player')){
      return false;
    } else {
      return true;
    }
  };

  var _compMove = function(){
    var $empties = $('.box_cell').not('.red').not('blue');
    var $choice = $empties[Math.floor(Math.random()*$empties.length)];
    _setColor.call($choice);
  };

  return {
    move: move,
    init: init,
    player: player
  }
})();
