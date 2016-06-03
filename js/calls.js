$(document).ready(function(){
  $(".btn-default").on("click", "a", function(e){
    e.preventDefault();
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(databases) {
        console.log(databases);
        $("tbody").empty();
        for (var i = 0; i < databases.length; i++) {
          $("tbody").append(buildTableRow(databases[i]));
        }
      }
    })
  });

  /*function buildTableRow(databaseData) {
    var db1Td = $("<td>").append(databaseData.name);
    var db2Td = $("<td>").append(databaseData.name);
    var db3Td = $("<td>").append(databaseData.name);
    var db4Td = $("<td>").append(databaseData.name);

    return $("<tr>").append(databaseData.name);
      .append(imagesTd)
      .append(imagesTd)
      .append(imagesTd);
  }*/
});