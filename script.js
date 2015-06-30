$(function() {

	var $newItem = $("#new-item");
	var $itemName = $("#item-name");
	var $itemDescription = $("#item-description")
	var $list = $("#list")

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

	$itemName.prop('required',true);
	$itemDescription.prop('required',true);

	$newItem.on("submit", $newItem, function(event) {
		event.preventDefault();

		var toDoName = $("#item-name").val();
		var toDoDescription = $("#item-description").val();
		var toDoData = {name : toDoName, description : toDoDescription};

		items.push(toDoData);

		$("#empty").hide();
		$itemName.focus();

		// $list.append("<li>"+$itemName.val()+"</li>");
		$itemName.val("");
		// $list.append("<ul><li>"+$itemDescription.val()+"</li></ul>");
		$itemDescription.val("");

		// items.push({name : $itemName.val(), description : $itemDescription.val()});
		console.log(items);
	});

	$("#list").on("click", "li", function(event) {
		event.preventDefault();
		$(this).addClass("completed");
		$("#empty").removeClass("completed");
	});

});
