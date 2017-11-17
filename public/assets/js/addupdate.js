$(document).ready(function() {
  $(document).on("click", "button.add", handleMerchAdd);
  $(document).on("click", "button.update", handleMerchUpdate);

  var userId;

  function getMerch(merch) {
    userId = user || "";
    if (userId) {
      userId = "/?userid=" + userid;
    }
    $.get("/api/merch" + userId, function(data) {
      console.log("Merchtbls", data);
      merchtbls = data;
      if (!merchtbls || !merchtbls.length) {
        displayEmpty(user);
      } else {
        return false;
      }
    });
  }

  function handleMerchAdd() {
    var newMerch = $(this)
      .parent()
      .parent()
      .data("merch");
    addMerch(newMerch.userid);
    console.log(newMerch);
  }

  function handleMerchUpdate() {
    var updateMerch = $(this)
      .parent()
      .parent()
      .data("merch");
    updateMerch(updateMerch.merchid.userid);
  }
});
