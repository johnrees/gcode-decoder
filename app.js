window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  var fileDisplayArea = document.getElementById('fileDisplayArea');
  var commentDisplayArea = document.getElementById('commentDisplayArea');
  var table = document.getElementById('table');

  fileInput.addEventListener('change', function(e) {
    var file = fileInput.files[0];
    var textType = /text.*/;
      var reader = new FileReader();

      reader.onload = function(e) {
        var splitlines = reader.result.split("\n");
        var lines = [];
        var previousComment = '';
        for (var i = 0; i < splitlines.length; i++) {
          var comment = gcodes[splitlines[i].split(" ")[0]];
          var tr = document.createElement('tr');
          if (previousComment != comment) {
            previousComment = comment;
          } else {
            tr.className = 'hidden'
          }
          tr.innerHTML += '<th>'+ (i+1) +'</th>';
          tr.innerHTML += '<td class="code">'+ splitlines[i] +'</td>';
          if (comment) {
            tr.innerHTML += '<td class="comment">'+ comment +'</td>';
          }
          table.appendChild(tr);
          lines.push( gcodes[splitlines[i].split(" ")[0]] )
        }
        // fileDisplayArea.innerText = reader.result;
        // commentDisplayArea.innerText = lines.join("\n");
      }

      reader.readAsText(file);

  });
}
