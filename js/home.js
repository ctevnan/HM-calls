$(document).ready(function() {
  function loadDoc() {
    var xhttp =  new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("header").innerHTML = xmlhttp.getAllResponseHeaders();
      }
    };
    xmlhttp.open("GET", "ajax_info.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var myFunction;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>userID</th><th>currentDatabase</th><th>image</th></tr>";
    var x = xmlDoc.getElementsByTagName("ngtable adding pagination.PNG");
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