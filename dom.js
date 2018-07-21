var inputForm = document.getElementById("line-select");
var tubeList = document.getElementById("tube-lines");
var logo = document.getElementById("tflphy-logo");
var submitButton = document.querySelector(".submit");
var statusText = document.getElementById("line-status-text");
var error = document.getElementById("error");
var gif = document.getElementById("giphy-gif");

inputForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var lineName = tubeList.options[tubeList.selectedIndex].value;
  changeColors(lineName);
  getLineStatus(lineName);
});

function showError() {
  error.classList.remove("hidden");
}

function hideError() {
  error.classList.add("hidden");
}

function changeColors(lineName) {
  var lineColor = getValue("logoColor", lineName);
  var backgroundColor = getValue("backgroundColor", lineName);
  logo.style.fill = lineColor;
  submitButton.style.backgroundColor = lineColor;
  document.body.style.backgroundColor = backgroundColor;
}

function renderLineStatus(lineStatus, lineName) {
  hideError();
  var emoji = getValue("emoji", removeWhitespace(lineStatus));
  statusText.innerHTML = lineStatus + " on<br>" + lineName + emoji;
}

function renderGif(gifObj) {
  hideError();
  gif.src = gifObj.data.images.fixed_height.url;
  gif.classList.remove("hidden");
}
