$(document).ready(function() {
	$(".editable").on("click", function() {
		var textEdited = "<div class='form'><textarea class='edit-textarea'>" + $(this).text().trim() + '</textarea>';
		$(this).hide().after(textEdited);
		$(".edit-textarea").focus();
	});

	$(".parent-container").on("blur", "textarea", function(event) {
		event.preventDefault();
		$(".editable").show();
		$(this).hide();
	});
});