$(document).ready(function(){
  /*$(".list-group").on("click", "a", function(e) {
    e.preventDefault(); */

  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
   /* response: "Access-Control-Allow-Origin", true
    dataType: "application/json; charset=utf-8",*/
    dataType: "jsonp",
    success: function(response) {
      console.log(response);
        /*for (var i = 0; i < database.length; i++) {
        var newListItem = buildListGroup(database[i]);
        $(".list-group").append(new ListItem);*/
      }
    }),
    /*error: function(jqXHR, textStatus, errorThrown) {
      alert("error");
        console.log(errorThrown);
      })
    })    */

 
  //working
    $.ajax({
    type: "POST",
    /*dataType: "application/json",*/
   /* Response: "Access-Control-Allow-Origin", true*/
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder2&database=TestFolder2",
    dataType: "jsonp",
    success: function(response) {
      console.log(response); 
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("error");
        console.log(errorThrown);
      }
  });
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