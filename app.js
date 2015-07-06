window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');
  var commentDisplayArea = document.getElementById('commentDisplayArea');

  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var textType = /text.*/;


      var reader = new FileReader();

      reader.onload = function(e) {
        var splitlines = reader.result.split("\n");
        var lines = [];
        for (var i = 0; i < splitlines.length; i++) {
          lines.push( gcodes[splitlines[i].split(" ")[0]] )
        }
        fileDisplayArea.innerText = reader.result;
        commentDisplayArea.innerText = lines.join("\n");
      }

      reader.readAsText(file);

  });
}
