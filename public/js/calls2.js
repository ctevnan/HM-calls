$(document).ready(function () {

 $.getJSON("http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&callback=?", function(json){
    console.log(json);
  });

  var image = {
    name: "VPNVerify888",
    userID: "TestFolder",
    images: [{
      name: "6712c44f-9d04-498b-ac68-c1538ad72408_-10_-1_.bmp",
      userID: "TestFolder",
      currentDatabase: "VPNVerify888"
    }]
  };

  //the values arent used, just the keys

  function writeToDom(title, content) {
    $("#results").append("<div class= 'header'>" + title + ":</div><div><pre>" + content + "</pre></div>");
  }

  function showResults(evnt) {
    writeToDom('Plain', JSON.stringify(image));
    writeToDom('Formatted', JSON.stringify(image, null, 4));
    writeToDom('Plucked from event via replacer array', JSON.stringify(evnt, ["clientX", "clienty", "offsetX", "offsetY" ], 4));
    writeToDom('Plucked from Event via replacer Fn', JSON.stringify(evnt, function(key, value) {
      var result = value;
      return result;
    }, 4));
  }

  $(function() {
    $(document).on("click", "#clickme", showResults);
  });




  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
      xhr.open('GET', "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder", true);
      xhr.setResponseHeader('Access-Control-Allow-Origin', true);
      xhr.send();
    }
  }); 


 $.ajax({
  type: "GET",
  url: "http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
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
 });
 