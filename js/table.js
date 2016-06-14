$(document).ready(function() {
  var tableSet = $('#table1').DataTable();
  var counter = 1;

  $("#addRow").on('click', function() {
    t.row.add([
      counter + '.1',
      counter + '.2',
      counter + '.3',
      counter + '.4'
    ]).draw( false );

    counter++;
  } );

  //auto add first row of data
  $('#addRow').click();
} );