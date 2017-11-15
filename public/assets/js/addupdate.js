$(document).ready(function() {


$(document).on("click", "button.add", handleMerchAdd);
$(document).on("click", "button.update", handleMerchUpdate);





function handleMerchAdd() {
	var newMerch = $(this)
		.parent()
		.parent()
		.data("merch");
	addMerch(newMerch.userid)
}


function handleMerchUpdate() {
	var updateMerch = $(this)
		.parent()
		.parent()
		.data("merch");
	updateMerch(updateMerch.merchid.userid)
}






})