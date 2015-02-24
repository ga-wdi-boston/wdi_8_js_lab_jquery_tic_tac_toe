$(document).ready(function() {

  var lastColor = 'red';

  // gives me all elements with a class of box_cell
  $('table tbody tr').on('click', 'td', function(event){

    var done = $(this).data('done');
    if(!done && lastColor == 'red'){
      // set to black
      $(this).css('background-color', 'black');
      lastColor = 'black'
    }else if(!done) {
      // set to red
     $(this).css('background-color', 'red');
     lastColor = 'red';
    }

    $(this).data('done', true);


  });

});


