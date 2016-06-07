$(document).ready(function(){
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df",
    success: function(databases) {
      console.log(databases);
      for (var i = 0; i < databases.length; i++) {
        var newListItem = buildListGroup(databases[i]);
        $(".list-group").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("error");
    }
  });

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