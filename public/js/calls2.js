$(document).ready(function(){

  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    success: function(response) {
      console.log(response);
    } 
  });
  function successCallback(responseObj){
    //read response, show data
    alert(JSON.stringify(responseObj)); //only applicable to JSON response
  }
  

  $.ajax({
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
  })      