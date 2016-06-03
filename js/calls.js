$(Document).ready(function(){
  $(".btn-default").on("click", "a", function(e){
    e.preventDefault();
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(databases) {
        $("tbody").empty();
        for (var i = 0; i < databases.length; i++) {
          $("tbody").append(buildTableRow(databases[i]))
        }
      }
    })
  }) 
}