$(document).ready(function () {
 
 var url = 'https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder';

 $.ajax({
  url: url,
  complete: function(data){
    console.log(data);
  }
 });
 
 $.getJSON("https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder", function(json){
    console.log(json);
  });

 $.ajax({
  type: "GET",
  url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder&output=json",
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