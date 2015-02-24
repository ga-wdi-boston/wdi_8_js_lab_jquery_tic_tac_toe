$(document).ready(function(){

  // when click on changes color
  // two colors for x and o
  // when click not only changes the color but a way to check who won.

  var $changeEvent= $('.box_cell');
  $('td').on('click','.box_cell');

  var playerColor = function(){
    //if a box is selected change the color.

    $(this).css("background-color", "red");
  }

});
