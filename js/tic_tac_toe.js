$(document).ready(function(){

  var box1 = $('#box_0_0');
  var box2 = $('#box_0_1');
  var box3 = $('#box_0_2');
  var box4 = $('#box_1_0');
  var box5 = $('#box_1_1');
  var box6 = $('#box_1_2');
  var box7 = $('#box_2_0');
  var box8 = $('#box_2_1');
  var box9 = $('#box_2_2');
  box1.text('a');
  box2.text('b');
  box3.text('c');
  box4.text('d');
  box5.text('e');
  box6.text('f');
  box7.text('g');
  box8.text('h');
  box9.text('i');

  var turnCounter = 1;
  var changeColor = function(){
    if(!$(this).hasClass('used')){
      turnCounter % 2 === 0 ? $(this).css('background-color', 'red') : $(this).css('background-color', 'black');
      turnCounter % 2 === 0 ? $(this).text('o'): $(this).text('x');
      $(this).addClass('used');
      turnCounter++;}
      winCheck();
  };
  var winCheck = function(){
    if(box1.text() === box2.text() && box2.text() === box3.text()){
      alert("row 1 win");
    } else if(box4.text() === box5.text() && box5.text() === box6.text()){
      alert("row 2 win");
    } else if(box7.text() === box8.text() && box8.text() === box9.text()){
      alert("row 3 win");
    } else if(box1.text() === box4.text() && box4.text() === box7.text()){
      alert("col 1 win");
    } else if(box2.text() === box5.text() && box2.text() === box8.text()){
      alert("col 2 win");
    } else if(box3.text() === box6.text() && box6.text() === box9.text()){
      alert("col 3 win");
    } else if(box1.text() === box5.text() && box5.text() === box9.text()){
      alert("diagonal win");
    } else if(box3.text() === box5.text() && box5.text() === box7.text()){
      alert("diagonal win");
    } else {
      console.log("keep playing")
    };
  };

  $('.box_cell').on('click', changeColor);

});


