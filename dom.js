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
  dom.changeColors(lineName);
  logic.getLineStatus(lineName);
});

var dom = {
  changeColors: function(lineName) {
    var lineColor = convert.getValue("logoColor", lineName);
    var backgroundColor = convert.getValue("backgroundColor", lineName);
    logo.style.fill = lineColor;
    submitButton.style.backgroundColor = lineColor;
    document.body.style.backgroundColor = backgroundColor;
  },

  renderLineStatus: function(lineStatus, lineName) {
    dom.hideError();
    var emoji = convert.getValue("emoji", logic.removeWhitespace(lineStatus));
    statusText.innerHTML = lineStatus + " on<br>" + lineName + emoji;
  },

  renderGif: function(gifObj) {
    dom.hideError();
    gif.src = gifObj.data.images.fixed_height.url;
    gif.classList.remove("hidden");
  },

  showError: function() {
    error.classList.remove("hidden");
  },

  hideError: function() {
    error.classList.add("hidden");
  }
};
