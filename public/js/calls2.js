$(document).ready(function() {
  $(".btn btn-default").on("click", function(e) {
    e.preventDefault();
    
    var method = $("method").val();
    var userID = $("userID").val();
    var currentDB = $("currentDB").val();
    var mode = $("mode").val();
    var halberdApiUrl = "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder";

    halberdApiUrl += "&userID" + userID + "&currentDB" + currentDB + "&mode" + mode;

    $.ajax({
      type:"GET",
      url: halberdApiUrl,
      success: function(response) {
        console.log(response);
      }
    });
  });
});   

$("form#data").submit(function(){
  var formData = $(this).serialize();

  $.ajax({
    url: window.location.pathname,
    type: 'GET',
    data: formData,
    async: false,
    success: function (data) {
      alert("data");
    },
    cache: false,
    contentType: false,
    processData: false
  });

  return false;
});