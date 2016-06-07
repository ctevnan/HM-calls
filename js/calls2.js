$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: 'http://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df',
    dataType: "jsonp",
    success: function(database) {
     /* console.log(database);*/
/*        for (var i = 0; i < database.length; i++) {
        var newListItem = buildListGroup(database[i]);
        $(".list-group").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("error");*/
    }
  });
  
  $.ajax({
    type: "POST",
    dataType: "jsonp",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=&database=",
    success: function(images) {
      console.log(images);
    }
  })
   /* function buildListGroup(images) {
      var halberdApiUrl = "http://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df";

      halberdApiUrl += imageData.owner.login + "/";
      halberdApiUrl += imageData.name + "/photos";

        var newLink = $("<a>")
          .attr("href", halberdApiUrl)
          .addClass("list-group-item")
          .append(imageData);
        return newLink;
      } 
  }); */
});