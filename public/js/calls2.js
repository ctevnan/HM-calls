$(document).ready(function () {
  var json = [{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_-10_-1_.bmp", "userID":"testFolder", "currentDatabase":"VPNVerify888"}, {"name":"6712c44f-9d04-498b-ac68-c1538ad72408_.bmp", "userID":"testFolder", "currentDatabase": "VPNVerify888"}, {"name":"6712c44f-9d04-498b-ac68-c1538ad72408_.bmp", "userID": "testFolder", "currentDatabase": "VPNVerify888"}];
    var tr;
    var table;
    for (var i = 0; i < json.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" + json[i].name + "</td>");
      tr.append("<td>" + json[i].userID + "</td>");
      tr.append("<td>" + json[i].currentDatabase + "</td>");
      $('table').append(tr);
    }
  });


  $.ajax({
    type:"GET",
    url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
    success: function(data, textStatus, jqXHR) {
      console.log(data);
      console.log(textStatus);
      console.log(jqXHR);
    }
  });    

  $.ajax({
  type: "GET",
  url: "https://cors-anywhere.herokuapp.com/http://matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
    success: function(data) {
      /*$("tbody").empty();*/
        for (var i = 0; i < data.length; i++){
          $("tbody").append(buildTableRow(data[i]));
        }
      }
    });

  function buildTableRow(data) {
    var nameTd = $("<td>").append(database.name);
    var userIDTd = $("<td>").append(userID);
    var currentDatabaseTd = $("<td>").append(currentDatabase);

    return $("<tr>").append(nameTd)
      .append(userIDTd)
      .append(currentDatabaseTd)
  }     