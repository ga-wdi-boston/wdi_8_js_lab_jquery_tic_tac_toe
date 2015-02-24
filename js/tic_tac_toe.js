$(document).ready(function() {
  var $box_cell = $('.box_cell');

  $box_cell.on('click', playTurn.changeCell);

});

var playTurn = (function() {
  var changeCell = $('.box_cell').toggle(function(){
    $(this).css('background-color', 'blue');
    $(this).dataset.player = "x";
  }, function () {
    $(this).css('background-color', 'red');
    $(this).dataset.player = "o";
  });

  return { changeCell: changeCell }

})();

/*

 Event setup using the `.on()` method with data
$( "input" ).on(
    "change",
    { foo: "bar" }, // Associate data with event binding
    function( eventObject ) {
        console.log("An input value has changed! ", eventObject.data.foo);
    }
);

the if-else for determining winner with this setup seems clunkly... esp. because the identifying numbers for the data aren't numbers, it's <td id="box_1_0" class="box_cell" data-row="1" data-col="0"></td>
trying to find where this data is stored in the DOM!
maybe I store it myself in an array? 

beyond this just not working, it might be more concise to make the change to each box relate to the team and their checked boxes rather than changing color

$( "td" ).toggle(
  function() {
    $( this ).addClass( "selected" );
  }, function() {
    $( this ).removeClass( "selected" );
  }
); // not sure if you can have both options of the toggle be to add a class, where class is x and o, and use that to track wins
$(this).addClass('o'); // no clue if it's legal to do two functions within each toggle, let alone add two different classes, as the example on mdn used the toggle to add and remove classes - the value is based on a boolean

ultimately wins will be based on having places marked in all three rows, all three columns, or the line up of data-row 0, colomn 0 and so on

*/

