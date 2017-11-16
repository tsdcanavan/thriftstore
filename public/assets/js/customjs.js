$(function() {
	var pop = $('.popbtn');
	var row = $('.row:not(:first):not(:last)');


	pop.popover({
		trigger: 'manual',
		html: true,
		container: 'body',
		placement: 'bottom',
		animation: false,
		content: function() {
			return $('#popover').html();
		}
	});


	pop.on('click', function(e) {
		pop.popover('toggle');
		pop.not(this).popover('hide');
	});

	$(window).on('resize', function() {
		pop.popover('hide');
	});

	row.on('touchend', function(e) {
		$(this).find('.popbtn').popover('toggle');
		row.not(this).find('.popbtn').popover('hide');
		return false;
	});

	// function sendData (sData) {
	// 	location.search = sData;
	// 	console.log(sData);
	//   }


	// $("#purchase").on ("click", function(event){
	// 	event.preventDefault();
	// 	sendData("/checkout");
	// });
});

//send all data required to local storage
//on send get local data and work with