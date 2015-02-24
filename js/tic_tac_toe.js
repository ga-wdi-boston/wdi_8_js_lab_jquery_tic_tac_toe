$(document).ready(function(){
  $winner = $('#winning');
  $tiles = $('td');
  $tiles.map(function(){
    this.player = NaN;
    this.set = false;
  });
  $tiles.on('click',Circle.changeColor);
});


var Circle = (function(){
  var click = 0;
  var changeColor = function(){
    if(click % 2 === 0 && $(this).get(0).set === false){
      $(this).css('background-color', '#f00');
      $(this).get(0).player = 'Red';
      $(this).get(0).set = true;
      click++;
    }else if ($(this).get(0).set === false){
      $(this).css('background-color', '#000');
      $(this).get(0).player = 'Black';
      $(this).get(0).set = true;
      click++;
    }

    _checkRows();
    _checkColumns();
    _checkDiagonals();
  };
  var _checkRows = function(){
    if(_threeIn(0,1,2)){
      _wins($tiles[0]);
    } else if(_threeIn(3,4,5)) {
      _wins($tiles[3]);
    } else if(_threeIn(6,7,8)) {
      _wins($tiles[6]);
    }
  };

  var _checkColumns = function(){
    if(_threeIn(0,3,6)){
      _wins($tiles[0]);
    } else if(_threeIn(1,4,7)) {
      _wins($tiles[1]);
    } else if(_threeIn(2,5,8)) {
      _wins($tiles[2]);
    }
  };

  var _checkDiagonals = function(){
    if(_threeIn(0,4,8)){
      _wins($tiles[0]);
    } else if(_threeIn(6,4,2)) {
      _wins($tiles[6]);
    }
  };

  var _wins = function(dot){
    return $winner.html(dot.player + ' WON!');
  };

  var _threeIn = function (one, two, three){
    return $tiles[one].player === $tiles[two].player && $tiles[one].player === $tiles[three].player;
  };
  return{
    changeColor: changeColor
  };
})();
