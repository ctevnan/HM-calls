$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: 'http://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df',
    dataType: "jsonp",
    success: function(images) {
      console.log(images);
     /* for (var i = 0; i < images.length; i++) {
        var newListItem = buildListGroup(images[i]);
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
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=2bb2b13d-1663-4198-88e2-a8cel63e8a28&database=cad87234-911b-4d90-ba0e-7e3ecb97ca62",
    success: function(database) {
      console.log(database);
    }
  })
  /*  function buildListGroup(images) {
      var halberdApiUrl = "http://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df";

      halberdApiUrl += photoData.owner.login + "/";
      halberdApiUrl += photoData.name + "/photos";

        var newLink = $("<a>")
          .attr("href", halberdApiUrl)
          .addClass("list-group-item")
          .append(photoData);
        return newLink;
      } 
  }); 
 */
 // }
});