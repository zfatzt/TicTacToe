$(document).ready(function() {
	$('.block').click(function() {
		if ($(this).html() == "") {
			$(this).html("X")
			checkFor3InRow("X");
			checkFor3InRow("O");
		
		}

	});
});

//
// var json = JSON2.stringify(field);

// $.ajax({
// type : "POST",
// url : "TelephoneNumbers.aspx/DeleteNumber",
// data : json,
// contentType : "application/json; charset=utf-8",
// dataType : "json",
// success : function(msg) {
// alert('In Ajax');
// }
// });

function checkFor3InRow(player) {

	var field = {
		block1 : $("#block1").html(),
		block2 : $("#block2").html(),
		block3 : $("#block3").html(),
		block4 : $("#block4").html(),
		block5 : $("#block5").html(),
		block6 : $("#block6").html(),
		block7 : $("#block7").html(),
		block8 : $("#block8").html(),
		block9 : $("#block9").html(),
	};

	if (field.block1 == player && field.block2 == player && field.block3 == player
			|| field.block1 == player && field.block4 == player
			&& field.block7 == player || field.block1 == player
			&& field.block5 == player && field.block9 == player
			|| field.block2 == player && field.block5 == player
			&& field.block8 == player || field.block3 == player
			&& field.block5 == player && field.block7 == player
			|| field.block3 == player && field.block6 == player
			&& field.block9 == player || field.block4 == player
			&& field.block5 == player && field.block6 == player
			|| field.block7 == player && field.block8 == player
			&& field.block9 == player) {
		$('#winningText').html("player " + player + " won!!")
	}
}