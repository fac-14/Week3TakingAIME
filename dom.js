var inputForm = document.getElementById("line-select");
var inputList = document.getElementById("tube-lines");
var logo = document.getElementById("tflphy-logo");
var submitBtn = document.querySelector(".submit");
var statusText = document.getElementById("line-status-text");
var errorMsg = document.getElementById("error");
var gif = document.getElementById("giphy-gif");

inputForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var lineName = inputList.options[inputList.selectedIndex].value;
  dom.changeColors(lineName);
  logic.getLineStatus(lineName);
});

var dom = {
  changeColors: function(lineName) {
    var lineColor = convert.getValue("logoColor", lineName);
    var backgroundColor = convert.getValue("backgroundColor", lineName);
    logo.style.fill = lineColor;
    submitBtn.style.backgroundColor = lineColor;
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
    errorMsg.classList.remove("hidden");
  },

  hideError: function() {
    errorMsg.classList.add("hidden");
  }
};
