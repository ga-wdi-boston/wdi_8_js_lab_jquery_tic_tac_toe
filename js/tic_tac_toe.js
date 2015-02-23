// Your code here
// Use the jQuery
$(document).ready(function(event) {
	var click_count = 0;

	$('td').mousedown(function() {
		if(click_count % 2 === 0) {
			// If click_count is even, set background to red.
			// Else set background to blue.
			if (this.attributes['data-clicked'].value === '0') {
				$(this).addClass('red');
				// After a click, set the data-counter to 1
				this.attributes['data-clicked'].value = '1';
				// After each click event, increase the click_count
				click_count += 1;
			} else {
				alert("Invalid move. Choose again.... wisely");
			}

		} else {
			if (this.attributes['data-clicked'].value === '0') {
				$(this).addClass('blue');
				// After a click, set the data-counter to 2
				this.attributes['data-clicked'].value = '2';
				// After each click event, increase the click_count
				click_count += 1;
			} else {
				alert("Invalid move. Choose again.... wisely");
			}
		}
		TicApp.check();
	});

});

TicApp = {};

TicApp.check = function(){

	var box_0_0 = $("#box_0_0")[0].attributes['data-clicked'].value,
			box_0_1 = $("#box_0_1")[0].attributes['data-clicked'].value,
			box_0_2 = $("#box_0_2")[0].attributes['data-clicked'].value,
			box_1_0 = $("#box_1_0")[0].attributes['data-clicked'].value,
			box_1_1 = $("#box_1_1")[0].attributes['data-clicked'].value,
			box_1_2 = $("#box_1_2")[0].attributes['data-clicked'].value,
			box_2_0 = $("#box_2_0")[0].attributes['data-clicked'].value,
			box_2_1 = $("#box_2_1")[0].attributes['data-clicked'].value,
			box_2_2 = $("#box_2_2")[0].attributes['data-clicked'].value;
			check = ["red", "blue"];
	for(var i = 0; i < 3; i++){
		if(eval('box_' + i + '_' + '0') === eval('box_' + i + '_' + '1') && eval('box_' + i + '_' + '1') === eval('box_' + i + '_' + '2') && eval('box_' + i + '_' + '0') !== "0"){
			alert(check[parseInt(eval('box_' + i + '_' + '0')) - 1] + ' win row');
		}else if(eval('box_' + '0' + '_' + i) === eval('box_' + '1' + '_' + i) && eval('box_' + '1' + '_' + i) === eval('box_' + '2' + '_' + i) && eval('box_' + '0' + '_' + i) !== "0"){
			alert(check[parseInt(eval('box_' + i + '_' + '0')) - 1] + ' win hori');
		}
	}
	if( ((box_0_0 === box_1_1 && box_1_1 === box_2_2) || (box_2_0 === box_1_1 && box_1_1 === box_0_2))  && box_1_1 !== "0"){
		alert(check[parseInt(box_1_1) - 1] + " win slant");
	}
};

