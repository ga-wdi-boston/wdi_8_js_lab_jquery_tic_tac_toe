$(document).ready(function(){

  var turn = 0;

  var counter = function(arr) {
    var count = [], prev;
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            count.push(1);
        } else {
            count[count.length-1]++;
        }
        prev = arr[i];
    }
    return count;
  };

  var playerOneTurn = function(ele){
    ele.css('background-color','red').attr('data-player', 'player1');
    playerCheck("player1");
  };

  var playerTwoTurn = function(ele){
    ele.css('background-color','blue').attr('data-player', 'player2');
    playerCheck("player2");
  };

  var playerCheck = function(player){
    var playerMoves = $('td[data-player="' + player + '"]');
    var row = jQuery.map(playerMoves, function(cell) {return Number(cell.dataset.row) });
    var col = jQuery.map(playerMoves, function(cell) {return Number(cell.dataset.col) });
    if ((counter(col).indexOf(3) > -1) || (counter(row).indexOf(3) > -1)) { alert(player + ' has won!')};
    if ((row.indexOf(0) > -1 && row.indexOf(1) > -1 && row.indexOf(2) > -1) && (col.indexOf(0) > -1 && col.indexOf(1) > -1 && col.indexOf(2) > -1)) { alert(player + ' has won!')};
  };

  $('td').on('click', function() {
    (turn % 2 === 0) ? playerOneTurn($(this)) : playerTwoTurn($(this));
    turn = turn + 1;
  });
});
