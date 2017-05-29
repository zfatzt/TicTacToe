$(document).ready(function(){
    $(".block").click(function(){
        $(this).append("X");
    });
});

//var field = {
//	block1 : document.getElementbyId("#block1").value,
//	block2 : document.getElementbyId("#block2").value,
//	block3 : document.getElementbyId("#block3").value,
//	block4 : document.getElementbyId("#block4").value,
//	block5 : document.getElementbyId("#block5").value,
//	block6 : document.getElementbyId("#block6").value,
//	block7 : document.getElementbyId("#block7").value,
//	block8 : document.getElementbyId("#block8").value,
//	block9 : document.getElementbyId("#block9").value,
//};
//
//var json = JSON2.stringify(field);
//
//$.ajax({
//	type : "POST",
//	url : "TelephoneNumbers.aspx/DeleteNumber",
//	data : json,
//	contentType : "application/json; charset=utf-8",
//	dataType : "json",
//	success : function(msg) {
//		alert('In Ajax');
//	}
//});
//
//
//function checkFor3XInRow(){
//	if field.block1 == "X" && field.block2 == "X" && field.block3 == "X" || field.block1 == "x" && field.block4 == "X" && field.block7 == "X" || field.block2 == "X" && field.block5 == "X" &&field.block8 == "X" || field.block3 == "X" && field.block6 == "X" && field.block9 == "X",
//}