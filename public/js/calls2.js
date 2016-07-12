$(document).ready(function() {
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://matchapi.halberdtechnologies.com/api/Database?userID=13e3961f-b35c-41b7-bc49-b0557e7c6d62', true);
      xhr.setResponseHeader('Access-Control-Allow-Origin', true);
      xhr.setResponseHeader('Get', 'Post');
      xhr.responseType = '';
      xhr.send();
    }  
  });

  $.ajax({
    type:"GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=13e3961f-b35c-41b7-bc49-b0557e7c6d62",
    success: function myCallbackFunction(database) {
      $('tbody').append('database.response');
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
