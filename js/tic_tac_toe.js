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

  var playerTurn = function(ele, color, player){
    ele.css('background-color',color).attr('data-player', player).data('player', player);
    playerCheck(player);
  };

  var diagonalChecker = function(player) {
    if (($('#box_0_0').data().player === player) && ($('#box_1_1').data().player === player) && ($('#box_2_2').data().player === player)) { alert(player + ' has won!')};
    if (($('#box_0_2').data().player === player) && ($('#box_1_1').data().player === player) && ($('#box_2_0').data().player === player)) { alert(player + ' has won!')};
  };

  var playerCheck = function(player){
    var playerMoves = $('td[data-player="' + player + '"]');
    var row = jQuery.map(playerMoves, function(cell) {return Number(cell.dataset.row) });
    var col = jQuery.map(playerMoves, function(cell) {return Number(cell.dataset.col) });
    if ((counter(col).indexOf(3) > -1) || (counter(row).indexOf(3) > -1)) { alert(player + ' has won!')};
    diagonalChecker(player);
  };

  $('td').one('click', function() {
    (turn % 2 === 0) ? playerTurn($(this), "red", "player1") : playerTurn($(this), "blue", "player2");
    turn = turn + 1;
  });
});
