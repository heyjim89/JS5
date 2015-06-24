$(document).ready(function() {
	$(".editable").on("click", function() {
		var textEdited = "<div class='form'><textarea class='edit-textarea'>" + $(this).text().trim() + '</textarea>';
		$(this).hide().after(textEdited);
		$(".edit-textarea").focus();
	});

	$(".parent-container").on("blur", "textarea", function(event) {
		event.preventDefault();
		
		var newText = $(this).val();
		
		// console.log(newText);
		// console.log($(this).parent().siblings('p'));

        $(this).parent().siblings('p').text(newText);

        // console.log($(this).siblings('p'));

		
		$(".editable").show();
		$(this).hide();

	});
});