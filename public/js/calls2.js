$(document).ready(function () {

  $("#button").click(function(){
    $.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
    success: function(response) {
      var tr;
      for (var i = 0; i < response.length; i++) {
        tr = $('<tr/>');
        tr.append('<td>' + response[i].name + '</td>');
        tr.append('<td>' + response[i].userID + '</td>');
        tr.append('<td>' + response[i].currentDatabase + '</td>');
        $('table').append(tr);
      }
    }
  });
});
});  
  /*$.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
    success: function(response){
      $.each([response], function(i, objects){
        var list = "<li>" + objects + "</li>";
      $('#result').append(list);  
      });
    },
    error: function(msg){
      alert(msg.responseText);
    }
  });*/
  

  /*$(".list-group").on("click", "a", function(e) {
    e.preventDefault();
  */
   /* $.ajax({
      type: "GET",
      url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
      success: function(data) {
        $("tbody").empty();
        for (var i = 0; i < data.length; i++){
          $("tbody").append(buildTableRow(data[i]));
        }
      }
    })
  });

  function buildTableRow(database) {
    var nameTd = $("<td>").append(database.name);
    var userIDTd = $("<td>").append(userID);
    var currentDatabaseTd = $("<td>").append(currentDatabase);

    return $("<tr>").append(nameTd)
      .append(userIDTd)
      .append(currentDatabaseTd)
  }      */
    
 /*$.ajax({
  type: "GET",
  url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
  success: function(userID) {
    for (var i = 0; i < userID.length; i++) {
      var newlistItem = buildlistGroup(userID[i]);
      $("list-group").append(newlistItem);
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    alert("Error thrown");
  }

  function buildListGroup(data) {
      var apiUrl = "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder";
      apiUrl += database.owner.login + "/";
      apiUrl += database.name + "/userID";

      var newLink = $("<a>")
        .attr("href", apiUrl)
        .addClass("list-group-item")
        .append(database.full_name);
      return newLink;
    }
  }   */

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