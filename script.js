$(function() {

	var $newItem = $("#new-item");
	var $itemName = $("#item-name");
	var $list = $("#list")
	var $itemDescription = $("#item-description")

    $itemDescription.keypress(function (e) {
        if(e.which == 13) {
            //submit form via ajax, this is not JS but server side scripting so not showing here
            e.preventDefault();
            $(this).submit();
        }
    });

    var items = [{name : "Fruit", description : "Apples, Bananas, Grapes"},
    			{name : "Veggies", description : "Lettuce, Carrots, Potatoes"},
    			{name : "Meat", description : "Chicken"}];

    $.each(items, function(event) {
    	$list.append("<li>"+this.name+"</li>");
		$list.append("<ul><li>"+this.description+"</li></ul>");

    });

	// $newItem.submit(function() {
		// don't don't do this kind of declatation
	// });

	$itemName.prop('required',true);
	$itemDescription.prop('required',true);

	$newItem.on("submit", function(event) {
		event.preventDefault();
		$("#empty").hide();
		$itemName.focus();
		// $list.append("<li>"+$itemName.val()+"</li>");
		items.push({name : $itemName.val(), description : $itemDescription.val()})
		$itemName.val("");
		// $list.append("<ul><li>"+$itemDescription.val()+"</li></ul>");
		$itemDescription.val("");
	});


	$("#list").on("click", "li", function(event) {
		event.preventDefault();
		$(this).addClass("completed");
		$("#empty").removeClass("completed");
	});

});
