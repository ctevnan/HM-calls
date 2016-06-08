$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    dataType: "jsonp",
    success: function(database) {
      console.log(response);
        for (var i = 0; i < database.length; i++) {
        var newListItem = buildListGroup(database[i]);
        $(".list-group").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("error");
    }
  });
  
  $.ajax({
    type: "POST",
    dataType: "jsonp",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=TestFolder3",
    success: function(images) {
      console.log(images); 
    }
  })
    function buildListGroup(images) {
      var halberdApiUrl = "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder";
      halberdApiUrl += TestFolder2.TestFolder + "/";
      halberdApiUrl += images.name + "/images";

      var newLink = $("<a>")
        .attr("href", halberdApiUrl)
        .addClass("list-group-item")
        .append(imageData);
          return newLink;
        }  
      }) 