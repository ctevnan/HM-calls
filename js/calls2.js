$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    dataType: "jsonp",
    success: function(response) {
      console.log(response);
      }
    }) 

    $.ajax({
    type: "POST",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=TestFolder",
    dataType: "jsonp",
    success: function(response) {
      console.log(response); 
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("errorThrown");
        console.log(errorThrown);
      }
  });
});   