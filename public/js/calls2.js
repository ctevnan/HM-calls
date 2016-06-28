$(document).ready(function(){

  var invocation = new XMLHttpRequest();
  var url = "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder";

  function callOtherDomain() {
    if(invocation) {
      invocation.open("GET", url, true);
      invocation.onreadystatechange = handler;
      invocation.send();
    }
  }
  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    success: function(data, textStatus, jqXHR) {
      alert("data");
    } 
  });

  $("#tbody").load("userID");
});
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