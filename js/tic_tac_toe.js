// Your code here
// Use the jQuery
$(document).ready(function() {

 var turn = 0;

  var changeColor = function() {
    if(!$(this).hasClass('red') && !$(this).hasClass('black')){
      if (turn %2 === 0) {
        $(this).css('background-color', 'red');
        turn ++;
        $(this).addClass('red');
     } else if (turn %2 != 0){
        $(this).css('background-color', 'black');
        turn ++;
        $(this).addClass('black');
    };
  };
  };

  $('.box_cell').on('click', changeColor);

  // var winner = function() {
  //   if (cell === 'red'){
  //     alert('Red wins!');
  //   }else if(cell === 'black') {
  //     alert('black wins!');
  //   };
  // };


var box1 = $('#box_0_0');
  var box2 = $('#box_0_1');
  var box3 = $('#box_0_2');
  var box4 = $('#box_1_0');
  var box5 = $('#box_1_1');
  var box6 = $('#box_1_2');
  var box7 = $('#box_2_0');
  var box8 = $('#box_2_1');
  var box9 = $('#box_2_2');

  var redWin = function(){
    if(box1.hasClass('red') && box2.hasClass('red') && box3.hasClass('red')) {
      alert("red wins!");
    };
  };

  var winner = function(){
    if(box1.hasClass('red') && box2.hasClass('red') && box3.hasClass('red')) {
      alert("red wins!");
    } else if (box4.hasClass('red') && box5.hasClass('red') && box6.hasClass('red')) {
      alert("red wins!");
    } else if(box7.hasClass('red') && box8.hasClass('red') && box9.hasClass('red')) {
      alert("red wins!");
    } else if(box1.hasClass('red') && box4.hasClass('red') && box7.hasClass('red')) {
      alert("red wins!");
    }else if(box2.hasClass('red') && box5.hasClass('red') && box8.hasClass('red')) {
      alert("red wins!");
    }else if(box3.hasClass('red') && box6.hasClass('red') && box9.hasClass('red')) {
      alert("red wins!");
    }else if(box1.hasClass('red') && box5.hasClass('red') && box9.hasClass('red')) {
      alert("red wins!");
    }else if(box3.hasClass('red') && box5.hasClass('red') && box7.hasClass('red')) {
      alert("red wins!");
    }else if(box1.hasClass('black') && box2.hasClass('black') && box3.hasClass('black')) {
      alert("black wins!");
    } else if (box4.hasClass('black') && box5.hasClass('black') && box6.hasClass('black')) {
      alert("black wins!");
    } else if(box7.hasClass('black') && box8.hasClass('black') && box9.hasClass('black')) {
      alert("black wins!");
    } else if(box1.hasClass('black') && box4.hasClass('black') && box7.hasClass('black')) {
      alert("black wins!");
    }else if(box2.hasClass('black') && box5.hasClass('black') && box8.hasClass('black')) {
      alert("black wins!");
    }else if(box3.hasClass('black') && box6.hasClass('black') && box9.hasClass('black')) {
      alert("black wins!");
    }else if(box1.hasClass('black') && box5.hasClass('black') && box9.hasClass('black')) {
      alert("black wins!");
    }else if(box3.hasClass('black') && box5.hasClass('black') && box7.hasClass('black')) {
      alert("black wins!");
    };
  };


  $('.box_cell').on('click', winner);
});


// var App = (function() {
//   var addToList = function(text) {
//     var $taskList = $('#tasks');
//     var $newTask = $('<li>');
//     $newTask.text(text);
//     $taskList.append($newTask);
//   };

//   var removeFromList = function() {
//     this.remove();
//   }

//   return { addToList: addToList, removeFromList: removeFromList };
// })();


  // var $colorRed = $('.box_cell');
  // $colorRed.click(function() {
  //   $colorRed.css('background-color', 'red');
  // });

  //  var $colorBlack = $('.box_cell');
  // $colorBlack.click(function() {
  //   $colorBlack.css('background-color', 'black');
  // });
