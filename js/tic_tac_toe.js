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
    if($tiles[0].player === $tiles[1].player && $tiles[0].player === $tiles[2].player){
      _wins($tiles[0]);
    } else if($tiles[3].player === $tiles[4].player && $tiles[3].player === $tiles[5].player) {
      _wins($tiles[3]);
    } else if($tiles[6].player === $tiles[7].player && $tiles[6].player === $tiles[8].player) {
      _wins($tiles[6]);
    }
  };

  var _checkColumns = function(){
    if($tiles[0].player === $tiles[3].player && $tiles[0].player === $tiles[6].player){
      _wins($tiles[0]);
    } else if($tiles[1].player === $tiles[4].player && $tiles[1].player === $tiles[7].player) {
      _wins($tiles[1]);
    } else if($tiles[2].player === $tiles[5].player && $tiles[2].player === $tiles[8].player) {
      _wins($tiles[2]);
    }
  };

  var _checkDiagonals = function(){
    if($tiles[0].player === $tiles[4].player && $tiles[0].player === $tiles[8].player){
      _wins($tiles[0]);
    } else if($tiles[6].player === $tiles[4].player && $tiles[6].player === $tiles[2].player) {
      _wins($tiles[6]);
    }
  };

  var _wins = function(dot){
    return $winner.html(dot.player + ' WON!');
  };
  return{
    changeColor: changeColor
  };
})();
