$(document).ready(function() {
  $.ajax({
    type:"GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=13e3961f-b35c-41b7-bc49-b0557e7c6d62&output=json&callback=ws_results",
    success: function(response) {
      console.log(response);
    }
  });
  
  /*$("form#data").submit(function(){
    var formData = $(this).serialize();

    $.ajax({
      url: window.location.pathname,
      type: 'POST',
      data: formData,
      async: false,
      success: function (data) {
        alert(data);
      },
      cache: false,
      contentType: false,
      processData: false
    });

    return false;
  }); */ 
});    