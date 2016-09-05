$(document).ready(function () {

 $.ajax({
  type: "GET",
  url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
  success: function(userID) {
    for (var i = 0; i < userID.length; i++) {
      var newlistItem = buildlistGroup(userID[i]);
      $(".list-group").append(newlistItem);
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    alert("Error thrown");
  }

  function buildListGroup(userID) {
      var apiUrl = "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder";
      apiUrl += userIDData.owner.login + "/";
      apiUrl += userIDData.name + "/userID";

      var newLink = $("<a>")
        .attr("href", apiUrl)
        .addClass("list-group-item")
        .append(userIDData.full_name);
      return newLink;
    }
  }   



 /*$.ajax({
  type: "POST",
  url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=VPNVerify888",
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
 });*/
}); 
}); 