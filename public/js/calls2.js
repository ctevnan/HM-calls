$(document).ready(function () {

 $.getJSON("http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder", function(json){
    console.log(json);
  });

 $.ajax({
  type: "GET",
  url: "http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder&output=json",
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
}); 