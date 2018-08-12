var logic = {
  apiRequest: function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) return callback(JSON.parse(xhr.responseText));
        dom.showError();
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  },

  getLineStatus: function(lineName) {
    var url =
      "https://api.tfl.gov.uk/line/" + lineName + "/status?details=false";
    logic.apiRequest(url, function(line) {
      var lineStatus = line[0].lineStatuses[0].statusSeverityDescription;
      dom.renderLineStatus(lineStatus, line[0].name);
      logic.getGif(logic.removeWhitespace(lineStatus));
    });
  },

  getGif: function(lineStatus) {
    var query = convert.getValue("sentiment", lineStatus);
    var url =
      "https://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC&tag=" +
      query;
    logic.apiRequest(url, function(gifObj) {
      dom.renderGif(gifObj);
    });
  },

  removeWhitespace: function(string) {
    return string.replace(/ /g, "");
  }
};
