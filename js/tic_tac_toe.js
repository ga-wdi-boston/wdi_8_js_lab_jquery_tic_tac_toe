// Your code here
// Use the jQuery
$(document).ready(function(){
  var lastColor = 'red';
  var gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
  var clicks = 0;
  $('table tbody tr').on('click', 'td', function() {
    //if((this).css("background-color", "black") || (this).css("background-color", "red")){
    //  alert("Nope Nope Nope");
   //   return;
   // } else {
      if(lastColor == 'red'){
  //       gameBoard[$(this).parent().index()][$(this).index()] != 0){
  //   alert("Nope Nope Nope");
  // }
        $(this).css("background-color", "black");
        lastColor = 'black'
        clicks++;
      } else {
        $(this).css("background-color", "red");
        lastColor = 'red';
        clicks++;
      }
  //  }
  })


  // $circles.click(function() {
  //   $(this).css("background-color", "red");
  });


var TicTacToe = (function() {


  return {

  }
})();


  // Bubble Pop code
  // $circles.click(function() {
  //   $(this).toggle(function(){
  //     $(this).css("background-color", "red")
  //   },function() {
  //     $(this).css("background-color", "black")
  //   })
  // })

