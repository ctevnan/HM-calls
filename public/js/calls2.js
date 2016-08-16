$(document).ready(function() {
  
  function setHeaders (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  };

  $.ajax({
    type:"GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    error: function(data, textStatus, jqHXR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    } 
  });
  $.ajax({
    type: "POST",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=VPNVerify888",
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    },
    error: function(data, textStatus, jqHXR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    }
  });
  function successCallback(responseObject){
    alert(JSON.stringify(responseObject));
  }
});   