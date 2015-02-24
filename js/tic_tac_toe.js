// Use the jQuery
var App = (function() {

  var $boxCell, $box1, $box2, $box3, $box4, $box5, $box6, $box7, $box8, $box9;
  var x = 1;

  var init = function() {

    $boxCell = $('.box_cell');
    $('tr').on('click', '.box_cell', App.changeColor );
    $('tr').on('click', '.box_cell', App.winner );

  }

  var changeColor = function(){
    if($(this).attr('class') != "box_cell red" && $(this).attr('class') != "box_cell black"){
      if (x%2 != 0) {
        $(this).css('background-color', 'red');
        $(this).addClass("red");
        x += 1;
      } else if (x%2 == 0) {
        $(this).css('background-color', 'black');
        $(this).addClass("black");
        x += 1;
      }
    }
  };

  var winner = function(){

    $box1 = $('#box_0_0');
    $box2 = $('#box_0_1');
    $box3 = $('#box_0_2');
    $box4 = $('#box_1_0');
    $box5 = $('#box_1_1');
    $box6 = $('#box_1_2');
    $box7 = $('#box_2_0');
    $box8 = $('#box_2_1');
    $box9 = $('#box_2_2');

    if (
      $box1.attr('class') === 'box_cell red' &&
      $box2.attr('class') === 'box_cell red' &&
      $box3.attr('class') === 'box_cell red'){
      alert('red is the winnah!');
    }
    else if (
      $box1.attr('class') === 'box_cell black' &&
      $box2.attr('class') === 'box_cell black' &&
      $box3.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $box4.attr('class') === 'box_cell red' &&
      $box5.attr('class') === 'box_cell red' &&
      $box6.attr('class') === 'box_cell red'){
      alert('red is the winnah!');
    }
    else if (
      $box4.attr('class') === 'box_cell black' &&
      $box5.attr('class') === 'box_cell black' &&
      $box6.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $box7.attr('class') === 'box_cell red' &&
      $box8.attr('class') === 'box_cell red' &&
      $box9.attr('class') === 'box_cell red'){
      alert('red is the winnah!');
    }
    else if (
      $box7.attr('class') === 'box_cell black' &&
      $box8.attr('class') === 'box_cell black' &&
      $box9.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $box1.attr('class') === 'box_cell red' &&
      $box4.attr('class') === 'box_cell red' &&
      $box7.attr('class') === 'box_cell red'){
      alert('red is the winnah!');
        }
    else if (
        $box1.attr('class') === 'box_cell black' &&
      $box4.attr('class') === 'box_cell black' &&
      $box7.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $box2.attr('class') === 'box_cell red' &&
      $box5.attr('class') === 'box_cell red' &&
      $box8.attr('class') === 'box_cell red'){
      alert('red is the winnah!');
    }
    else if (
      $box2.attr('class') === 'box_cell black' &&
      $box5.attr('class') === 'box_cell black' &&
      $box8.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $box3.attr('class') === 'box_cell red' &&
      $box6.attr('class') === 'box_cell red' &&
      $box9.attr('class') === 'box_cell red'){
      alert('red is the winnah!');
    }
    else if (
      $box3.attr('class') === 'box_cell black' &&
      $box6.attr('class') === 'box_cell black' &&
      $box9.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $box1.attr('class') === 'box_cell red' &&
      $box5.attr('class') === 'box_cell red' &&
      $box9.attr('class') === 'box_cell red'){
      alert('red is the winnah!');
    }
    else if (
      $box1.attr('class') === 'box_cell black' &&
      $box5.attr('class') === 'box_cell black' &&
      $box9.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $box3.attr('class') === 'box_cell black' &&
      $box5.attr('class') === 'box_cell black' &&
      $box7.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $box3.attr('class') === 'box_cell black' &&
      $box5.attr('class') === 'box_cell black' &&
      $box7.attr('class') === 'box_cell black'){
      alert('black is the winnah!');
    }
    else if (
      $('.red').length === 5){
      alert('stalemate suckas, play again!');
    }
  };

  return {
    init: init,
    changeColor: changeColor,
    winner: winner
  }

})();

$(document).ready(App.init);
