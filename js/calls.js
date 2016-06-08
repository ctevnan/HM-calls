$(document).ready(function(){
  $(".btn btn-default").on("click", "a", function(e){
    e.preventDefault();
    
    $.ajax({
      /*type: "GET",*/
      /*url: $(this).attr("href"),*/
      url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
      dataType: "jsonp",
      success: function(data) {
        $.each(data, function(key, value) {

          $("#mytable").append($('<tr>')
            .append($('<td>')
            .append(value.name))
            .append($('<td>')
            .append(value.name))  
        }
          $("tbody").empty();
          for (var i = 0; i < databases.length; i++) {
            $("tbody").append(buildTableRow(databases[i]));
          }
        }
      })
    });      
  });

  function buildTableRow(data) {
    var db1Td = $("<td>").append(databaseData.name);
    var db2Td = $("<td>").append(databaseData.name);
    var db3Td = $("<td>").append(databaseData.name);
    var db4Td = $("<td>").append(databaseData.name);

    return $("<tr>").append(databaseData.name);
      .append(imagesTd)
      .append(imagesTd)
      .append(imagesTd);
  }
});