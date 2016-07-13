$(document).ready(function() {
  $.ajax({
    type:"GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=13e3961f-b35c-41b7-bc49-b0557e7c6d62",
    success: function(response) {
      console.log(response);
    }
  });
});    