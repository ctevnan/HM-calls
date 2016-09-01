$(document).ready(function () {

 $.getJSON("http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder", function(json){
    console.log(json);
  });

  var json = '{ "name":"6712c44f-9d04-498b-ac68-c1538ad72408_-10_-1_.bmp", "userID":"testFolder","currentDatabase":"VPNVerify888" }';
  var image = JSON.parse(json);
  alert(image.name + " " + image.testFolder);

  

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