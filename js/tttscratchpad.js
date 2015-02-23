
$(document).ready(function(){
  var player = 0;
  var $box_cell = $('.box_cell');
  $elementRed($box_cell, player);

});

var $elementRed = function(element,player){
  // var unClickable = [];
  // unClickable.click(false);

  element.click(function(){

    if(player === 0){
    $(this).css('background-color', 'red');
    // unClickable.push('balls');
    player = 1;
    }
    else{
    $(this).css('background-color', 'blue');
    player = 0;
  };
  })
};














//Narf
// $(document).ready(function() {
//   var $box_cell = $('.box_cell');
//   var count = 0;

// $( function() {
//   $box_cell.click( function() {
//     var i = 0;
//       while (i < 9){
//         if (i%2===0){
//           $(this).css('background', 'red');
//           i++;
//         }
//         else {
//           $(this).css('background', 'blue')
//           i++;
//         }
//   }
//   });
// });
// });












//SHmea
// $(document).ready(function() {

//   for (var i = 0; i < 9; i++) {
//     console.log(i);
//     if (i%2===0){
//       oddRed();
//     }
//     else {
//       evenBlue();
//     }


// var oddRed = (function() {
//   var $box_cell = $('.box_cell');
// $( function() {
//   $box_cell.click( function() {
//     $(this).css('background', 'red');
//   });

// });

// var evenBlue = (function() {
//   var $box_cell = $('.box_cell');
// $( function() {
//   $box_cell.click( function() {
//     $(this).css('background', 'blue');
//   });

// });

// });

//   }

// });

































// $(document).ready(function(){





// var changeColor = {
//     box_cell: null,

//     setbox_cell: function(box_cell) {
//         this.box_cell = box_cell;
//         this.update();
//     },

//     update: function() {
//         console.log('Your turn!');
//     }
// };











//SUCCESS! COLOR ON CLICK!
// $(document).ready(function() {
//   var $box_cell = $('.box_cell');
// $( function() {
//   $box_cell.click( function() {
//     $(this).css('background', 'red');
//   });
// });
// });



//ALL THE DAMN BOXES
//  var $box_cell = $('.box_cell');
//  $box_cell.click(function(){
//    $box_cell.css('background-color','red');
// })
// });


//ONE DAMN SPECIFIC BOX
//  var $box_0_0 = $('#box_0_0');
//  $box_0_0.click(function(){
//    $box_0_0.css('background-color','red');
//  })
// });



// Get the cells to change color when you click on them
// Get the cell color to alternate on turn
// Add logic to check if a player has gotten 3 in a row for a row
// Do the same for columns and diagonals

