$(document).ready(function () {

  $.getJSON("http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&callback=?", function(result){
    //response data are now in the result variable
    alert(result);
  });
}); 
/*  $.ajax({
    type: "Get",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    dataType: "jsonp",
    jsonp: false,
    jasonpCallback: "myJsonMethod",
    success: function(data) {
      alert(data);
    },
    error: function(httpReq, status, exception) {
      alert(status+" "+exception);
    } 
  });
}); 

function getData(data) {
  console.log(data);
}*/
/*  var invocation = new XMLHttpRequest();
  var url = 'http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder';

  function callOtherDomain() {
    if(invocation) {
      invocation.open('GET', url, true);
      invocation.onreadystatechange = handler;
      invocation.send();
    }
  }

  function successCallback(responseObject){
    alert(JSON.stringify(responseObject));
  }

  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
      xhr.open('GET', "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder", true);
      xhr.setResponseHeader('Access-Control-Allow-Origin', true);
      xhr.send();
    }  
  });*/

  /*$.ajax({
    type: "POST",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=VPNVerify888",
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    error: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    }
  });*/
   