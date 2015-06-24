$(document).ready(function() {
	$(".editable").on("click", function() {
		var textEdit = "<div class='form'><textarea class='edit-textarea'>"+$(this).text().trim()+'</textarea>';
		console.log("$(this).text()");
		$(this).hide().after(textEdit);
	});

});