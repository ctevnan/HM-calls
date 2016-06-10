$(document).ready(function(){
  var i;
  var myFunction;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>userID</th><th>currentDatabase</th><th>image</th></tr>";
  var x = xmlDoc.getElementsByTagName("ngtable adding pagination.PNG");
  function myFunction(xml) {
    for (i = 0; i < x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("USERID")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("CURRENTDATABASE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue +
      "</td><tR>";
    }
    document.getElementById("table1").innerHTML = table;
  }
});    