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
    playerOneCheck();
  };

  var playerTwoTurn = function(ele){
    ele.css('background-color','blue').attr('data-player', 'player2');
    playerTwoCheck();
  };

  var playerOneCheck = function(){
    var playerOne = $('td[data-player="player1"]');
    var row = jQuery.map(playerOne, function(cell) {return Number(cell.dataset.row) });
    var col = jQuery.map(playerOne, function(cell) {return Number(cell.dataset.col) });
    if (counter(col).indexOf(3) > -1) { alert('Red player has won!')};
    if (counter(row).indexOf(3) > -1) { alert('Red player has won!')};
    if ((row.indexOf(0) > -1 && row.indexOf(1) > -1 && row.indexOf(2) > -1) && (col.indexOf(0) > -1 && col.indexOf(1) > -1 && col.indexOf(2) > -1)) { alert('Red player has won!')};
  };

  var playerTwoCheck = function(){
    var playerTwo = $('td[data-player="player2"]');
    var row = jQuery.map(playerTwo, function(cell) {return Number(cell.dataset.row) });
    var col = jQuery.map(playerTwo, function(cell) {return Number(cell.dataset.col) });
    if (counter(col).indexOf(3) > -1) { alert('Blue player has won!')};
    if (counter(row).indexOf(3) > -1) { alert('Blue player has won!')};
    if ((row.indexOf(0) > -1 && row.indexOf(1) > -1 && row.indexOf(2) > -1) && (col.indexOf(0) > -1 && col.indexOf(1) > -1 && col.indexOf(2) > -1)){ alert('Blue player has won!')};
  };

  $('td').on('click', function() {
    (turn % 2 === 0) ? playerOneTurn($(this)) : playerTwoTurn($(this));
    turn = turn + 1;
  });
});
