$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    dataType: "jsonp",
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      }
    }) 

    $.ajax({
    type: "POST",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=TestFolder",
    dataType: "jsonp",
    success: function(data) {
      console.log(data); 
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("errorThrown");
        console.log(errorThrown);
      }
  });
});       