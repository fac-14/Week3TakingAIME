var apiFunctions = {
  // generic API request function
  apiRequest: function(url, lineName, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var parsedObj = JSON.parse(xhr.responseText);
        // to pass data out of the function
        return callback(parsedObj, lineName);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  },
  // get line status using API request
  getLineStatus: function(lineName, callback) {
    apiFunctions.apiRequest(
      "https://api.tfl.gov.uk/line/mode/tube/status",
      lineName,
      function(parsedObj, lineName) {
        parsedObj.forEach(function(line) {
          if (line.name === lineName) {
            return apiFunctions.getGif(
              line.lineStatuses[0].statusSeverityDescription
            );
          }
        });
      }
    );
  },

  getGif: function(sentiment) {
    apiFunctions.apiRequest(
      "http://api.giphy.com/v1/gifs/search?q=" +
        sentiment +
        "&api_key=dc6zaTOxFJmzC",
      "",
      function(parsedObj) {
        console.log(parsedObj.data[0].images.downsized.url);
        return parsedObj.data[0].images.downsized.url;
      }
    );
  }
};

// see top answer: https://stackoverflow.com/questions/6847697/how-to-return-value-from-an-asynchronous-callback-function

apiFunctions.getLineStatus("Northern");

if (typeof module !== "undefined") {
  module.exports = apiFunctions;
}
