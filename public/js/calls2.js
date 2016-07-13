$(document).ready(function() {
  $.ajax({
    type:"GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=13e3961f-b35c-41b7-bc49-b0557e7c6d62",
    success: function(response) {
      console.log(response);
    }
  });
    
  /*$.ajax({
    type: "POST",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=TestFolder",
    success: function(data, textStatus, jqXHR) {
      console.log(data); 
      console.log(textStatus);
      console.log(jqXHR);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    }
  });*/
