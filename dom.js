// event listener for submit button

document
  // get the value from the drop-down form
  .getElementById("line-select")
  // add event listener to submit button
  .addEventListener("submit", function(event) {
    // prevent refresh
    event.preventDefault();
    var line = document.getElementById("tube-lines");
    var value = line.options[line.selectedIndex].value;
    // get selected line's id
    var colorKey = line.options[line.selectedIndex].id;
    var color = apiFunctions.logoColorObject[colorKey];
    document.getElementById("tflphy-logo").style.fill =
      apiFunctions.logoColorObject[colorKey];
    document.querySelector(".submit").style.backgroundColor = color;
    // setAttribute("background-color:" + color);
    // calls getLineStatus function
    apiFunctions.getLineStatus(value);
  });
