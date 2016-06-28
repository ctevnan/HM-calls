$(document).ready(function(){

  function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
      xhr.open('GET','http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder', true);
      xhr.setRequestHeader('Access-Control-Allow-Origin', true);
      xhr.send();
    }
  });
 
   /* type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    success: function(data, textStatus, jqXHR) {
      alert("data");
    } 
  });
*/
  /*$.ajax({
    type: "POST",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=TestFolder",
    success: function(response) {
    console.log(response); 
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("errorThrown");
      console.log(errorThrown);
      }
    })
    function successCallback(responseObj){
      alert(JSON.stringify(responseObj));
    }
  })      */