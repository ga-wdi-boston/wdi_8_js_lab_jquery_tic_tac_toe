// Your code here
// Use the jQuery

$(document).ready(function() {
    var turn = 0;
    // var topRow = [$('td')[0], $('td')[1], $('td')[2]];
    // var middleRow = [$('td')[3], $('td')[4], $('td')[5]];
    // var bottomRow = [$('td')[6], $('td')[7], $('td')[8]];

    var claimSpot = function() {
        if (($(this).css( "background-color" ) !== "rgb(255, 0, 0)") && ($(this).css( "background-color" ) !== "rgb(0, 0, 0)")) {
            if (turn % 2 === 0) {
                $(this).css('background-color', 'red');
            } else {
                $(this).css('background-color', 'black');
            }
            turn++;
            checkWinner();
        }
    };

    $('.box_cell').on('click', claimSpot);

    var checkWinner = function() {
        var $grid = $('td');
        if ($($grid[0]).css('background-color') === $($grid[1]).css('background-color') === $($grid[2]).css('background-color')) {
            return console.log('We have a winner!');
        }
    };

});

// $(this).data().row
