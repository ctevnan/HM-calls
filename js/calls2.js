$(document).ready(function(){
  /*$(".list-group").on("click", "a", function(e) {
    e.preventDefault(); */
  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    /*response: "Access-Control-Allow-Origin", true*/
    dataType: "jsonp",
    success: function(response) {
      console.log(response);
      }
    })
    /*error: function (jqXHR, textStatus, errorThrown) {
      alert("errorThrown");
        console.log(errorThrown);
      })*/
/*}) */   

    /*$.ajax({
    type: "POST",*/
   /* Response: "Access-Control-Allow-Origin", true
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder2&database=TestFolder2&jsonp=?",
    dataType: "jsonp",
    success: function(response) {
      console.log(response); 
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("errorThrown");
        console.log(errorThrown);
      }
  });*/
});   
    
   /* function buildListGroup(images) {
      var halberdApiUrl = "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder";
      halberdApiUrl += TestFolder2.TestFolder + "/";
      halberdApiUrl += images.name + "/images";

      var newLink = $("<a>")
        .attr("href", halberdApiUrl)
        .addClass("list-group-item")
        .append(imageData);
          return newLink;
        }  
      }) */