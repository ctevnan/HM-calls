$(document).ready(function() {
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder', true);
      xhr.setResponseHeader('Access-Control-Allow-Origin', true);
      xhr.send();
    }  
  });

  $.ajax({
    type:"GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=cad87234-911b-4d90-ba03-7e3ecb97ca62",
    success: function(data) {
      alert('data');
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
