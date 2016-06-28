$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();    
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(userID) {
        $("tbody").empty();
        for (var i = 0; i < userID.length; i++) {
          $("tbody").append(buildTableRow(userID[i]));
        }
      }
    })
  });
});  
             


 /* function buildTableRow(data) {
    var db1Td = $("<td>").append(databaseData.name);
    var db2Td = $("<td>").append(databaseData.name);
    var db3Td = $("<td>").append(databaseData.name);
    var db4Td = $("<td>").append(databaseData.name);

    return $("<tr>").append(databaseData.name);
      .append(imagesTd)
      .append(imagesTd)
      .append(imagesTd);
  }*/
