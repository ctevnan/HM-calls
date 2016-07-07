$(document).ready(function() {

  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder', true);
      xhr.setRequestHeader('Access-Control-Allow-Origin', true);
      xhr.send();
    }  
  });

  $.ajax({
    type:"GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    }
  })  
    
  $.ajax({
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
  });
});