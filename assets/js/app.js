//Check off specific todo by clicking
$('ul').on("click", "li", function () {
	$(this).toggleClass("completed")
})

//click X to delete item
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove()
	})
	event.stopPropagation();
})

//Add item to list
$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		var todoText = $(this).val()
		$(this).val("")
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>")
	}
})

//Hides/Unhides input field
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})