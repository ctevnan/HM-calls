$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    dataType: 'jsonp',
    success: function(responseString) {
      alert(responseString);
    },
    error: function(xhr, errorType, exception) {
      var errorMessage = exception || xhr.statusText;
      alert(errorMessage);
    }
  });
});     

/*      $.each(data, function(key, value) {

        $("#mytable").append($('<tr>')
          .append($('<td>')
          .append(value.name))
          .append($('<td>')
        })  
      })*/
 /*   }
  })*/