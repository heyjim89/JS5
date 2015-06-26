// $(document).ready(function() {
// 	$(".editable").on("click", function() {
// 		var textEdited = "<div class='form'><textarea class='edit-textarea'>" + $(this).text().trim() + '</textarea>';
// 		$(this).hide().after(textEdited);
// 		$(".edit-textarea").focus();
// 	});

// 	$(".parent-container").on("blur", "textarea", function(event) {
// 		event.preventDefault();

// 		var newText = $(this).val();

// 		// console.log(newText);
// 		// console.log($(this).parent().siblings('p'));

//         $(this).parent().siblings('p').text(newText);

//         // console.log($(this).siblings('p'));


// 		$(".editable").show();
// 		$(this).hide();

// 	});
// 	$('.editable').editable({
// 		type: 'text',
// 		title: 'Enter username',
// 		success: function(response, newValue) {
// 			userModel.set('username', newValue); //update backbone model
// 		}
// 	});
// });

$(document).on('ready', function() {

	// Found code to set defaults mode to offline by accessing mode to inline
	$.fn.editable.defaults.mode = 'inline';

	// Apply x-editable plugin to all items with editable class
	$('.editable').editable();

	// Trying to get it to save locally......
	$('.editable').editable({
		type: 'text',
		title: 'Enter username',
		success: function(response, newValue) {
			userModel.set('username', newValue); //update backbone model
		}
	});
});