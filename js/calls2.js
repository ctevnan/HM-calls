$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df",
    success: function(databases) {
      for (var i = 0; i < databases.length; i++) {
        var newListItem = buildListGroup(databases[i]);
        $(".list-group").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("error");
    }
  });

  function buildListGroup(photoData) {
    var photoApiUrl = "https://matchapi.halberdtechnologies.com/api/Database?userID=f6cd6592-f61e-40b2-afcc-c38827f075df";

    

  }
})