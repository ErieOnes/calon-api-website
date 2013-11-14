$(document).ready(function() {
  var oTable = $('#tblCandidates').dataTable({
    "oLanguage": {
      "sSearch": "Cari berdasarkan nama"
    },
    "aoColumnDefs": [
      {"bSearchable": false, "aTargets": [0,2,3,4,5,6]}
    ]
  })
  .columnFilter({
    "aoColumns": [
      {"type": "select", "sSelector": "#sLembaga"},
      null,
      {"type": "select", "sSelector": "#sKelamin"},
      null,
      {"type": "select", "sSelector": "#sDapil"},
      null,
      {"type": "select", "sSelector": "#sPartai"}
    ]
  });
});
