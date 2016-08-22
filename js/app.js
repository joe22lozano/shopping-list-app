$(document).ready(function() {
	doIntro();

	$('form').on('submit',function(e){
		e.preventDefault();
		console.log('it works');
		var addTask = $('#add-task').val();
		console.log(addTask);
		addToList(addTask);
		$('#add-task').val(undefined);
	});

	$('.list ul').on('click', '.delete', function() {
		console.log('delete')
		$(this).closest('li').remove();
	});
	$(".list ul").on('click', '.box', function() {
		$(this).parent().find('.list-item').toggleClass("completed");
	});


	//listen for click on favorite class
	$('.favorite').on('click', function() {
		//grab value of that button
		var addTask = $(this).attr('value');
		//add it to the shopping list
		console.log('did it', addTask);
		addToList(addTask);
	})

});

function doIntro() {
	console.log('did intro');
	$('.title').fadeIn(3500, function() {
	});
};

function addToList(value) {
	$('ul').prepend('<li><input class="box" type="checkbox"><span class="list-item">' + value + '</span><span class="delete">X</span></li>')
}