$(document).ready(function(){
  /*$(".list-group").on("click", "a", function(e) {
    e.preventDefault(); */

  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    success: function(response) {
      console.log(response);
        for (var i = 0; i < database.length; i++) {
        var newListItem = buildListGroup(database[i]);
        $(".list-group").append(new ListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("error");
    }
  });
})
 
  //working
    $.ajax({
    type: "POST",
    dataType: "jsonp",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=TestFolder",
    success: function(images) {
      console.log("images"); 
    }
  })
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