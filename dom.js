// update the DOM with the line status
// h3 id = line-status text

document
  .getElementById("line-select")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    var line = document.getElementById("tube-lines");
    var value = line.options[line.selectedIndex].value;
    apiFunctions.getLineStatus(value);
  });

// update the DOM with a gif
