$(document).ready(function() {
	$(".editable").on("click", function() {
		var textEdit = '<div class="form edit-inside">' +
			'<textarea id="inplace-' + $(this).attr("id") +
			'" class="edit-textarea">' + $(this).text().trim() +
			'</textarea>';

		$(this).hide().after(textEdit);
	});

});