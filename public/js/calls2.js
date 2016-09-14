$(document).ready(function () {
  var a1 = [{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_-10_-1_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_-20_-2_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_10_1_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"6712c44f-9d04-498b-ac68-c1538ad72408_20_2_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_-10_-1_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_-20_-2_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_10_1_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8699238a-3d32-47e4-a314-1c780aa3b59f_20_2_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_-10_-1_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_-20_-2_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_10_1_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"8f315f49-b42a-4da0-9361-dd03dd61c6f4_20_2_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_-10_-1_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_-20_-2_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_10_1_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"},{"name":"b0384360-50da-4ff5-b31c-ccf05486dd80_20_2_.bmp","userID":"testFolder","currentDatabase":"VPNVerify888"}];
  getData();

  function getData(){
    $.ajax({
      url:"https://cors-anywhere.herokuapp.com/matchapi.halberdtechnologies.com/api/Database?userID=testFolder",
      method: "GET",
      data: {
        array: a1
      },
      error: function(xhr, status, error){
        console.log(status, error);
      },
      success: function(json){
        console.log(json);
        var tr;
        $.each(a1, function(k, v) {
          tr = $("<tr></tr>");
          tr.append("<td>" + v.name + "</td>");
          tr.append("<td>" + v.userID + "</td>");
          tr.append("<td>" + v.currentDatabase + "</td>");
          $("#invList").append(tr);
        });
      }
    });
  }
});  