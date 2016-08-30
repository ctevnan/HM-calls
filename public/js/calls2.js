$(document).ready(function () {
  $.getJSON("http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&callback=?", function(json){
    console.log(json);
    JSON.stringify({"userID":"TestFolder","databases":[{"name":"TestFolder2","userID":"TestFolder","images":[{"name":"ngtable adding pagination.PNG","userID":"TestFolder","currentDatabase":"TestFolder2"}]},{"name":"VPNVerify888","userID":"TestFolder","images":[{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_-10_-1_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_-20_-2_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_10_1_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_20_2_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_-10_-1_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_-20_-2_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_10_1_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_20_2_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_-10_-1_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_-20_-2_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_10_1_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_20_2_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_-10_-1_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_-20_-2_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_10_1_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_20_2_.bmp","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"list.mdb","userID":"TestFolder","currentDatabase":"VPNVerify888"},{"name":"list.mdb.save","userID":"TestFolder","currentDatabase":"VPNVerify888"}]}]});
  });  

  /*$.ajax({
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder",
    data: {get_param : "images"},
    success: function(response) {
      var hmImages = response.images.image;
      for(var i = 0; i < hmImages.length; i++) {
        var newCol = builldthumbnail(hmImages[i]);
        $("#imagesRow").append(newCol);
      } 
    }
  });*/
});

  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
      xhr.open('GET', "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder", true);
      xhr.setResponseHeader('Access-Control-Allow-Origin', true);
      xhr.send();
    }  

 /*$.ajax({
    type: "POST",
    url: "http://matchapi.halberdtechnologies.com/api/Database?userID=TestFolder&database=VPNVerify888",
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
   