$(document).ready(function(){

  function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
      xhr.open('GET','http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder', true);
      xhr.setRequestHeader('Access-Control-Allow-Origin', true);
      xhr.send();
    }
  });

  $.ajax({
    type:"GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    success: function(data, textStatus, jqHXR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqHXR);
    },
    error: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    }
  })
});  
    
    /*$.ajax({
      type: "GET",
      url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
      success: function(userID) {
        for (var i = 0; i < userID.length; i++) {
          var newListItem = buildListGroup(userID[i]);
          $(".list-group").append(newListItem)
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("error");
      } 
    });*/

  $.ajax({
    type: "POST",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=TestFolder",
    success: function(data, textStatus, jqXHR) {
      console.log(data); 
      console.log(textStatus);
      console.log(jqXHR);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("errorThrown");
      console.log(errorThrown);
      }
    })
    function successCallback(responseObj){
      alert(JSON.stringify(responseObj));
    }
  });
});