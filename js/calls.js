$(document).ready(function() {
 /* $(".list-group").on("click", "a", function(e) {
    e.preventDefault();*/

  $.ajax({
  type: "GET",
  url: "http://matchapi.halberdtechnologies.com/?userID=UUID.randomUUID().toString().trim()",
  dataType: "application/json",
  Response: "Access-Control-Allow-Origin", true
  success: function(response) {
    console.log(response);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    alert("error");
      console.log(errorThrown);
    }  
  });
});      
    
    
   /* $.ajax({
      type: "GET",
      /*url: $(this).attr("href"),*/
      /*url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
      dataType: "jsonp",
      success: function(response) {
        console.log(response);*/
         /* $("tbody").empty();
          for (var i = 0; i < images.length; i++) {
            $("tbody").append(buildTableRow(images[i]));
          }*  

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
