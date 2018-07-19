var apiFunctions = {
  // generic API request function
  apiRequest: function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      // check response to request is good
      if (xhr.readyState == 4 && xhr.status == 200) {
        // parse response into object
        var parsedObj = JSON.parse(xhr.responseText);
        // run callback function after response received
        return callback(parsedObj);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  },

  // get tube line status using API request
  getLineStatus: function(lineName) {
    // store url for TfL API request
    let url =
      "https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status";
    // make API request to TfL
    apiFunctions.apiRequest(url, function(parsedObj) {
      parsedObj.forEach(function(line) {
        // find the tube line chosen by the user
        if (line.name === lineName) {
          // get appropriate gif
          return apiFunctions.getGif(
            line.lineStatuses[0].statusSeverityDescription
          );
        }
      });
    });
  },

  getGif: function(statusDescription) {
    // parse TfL status description into sentimentObject key
    let sentiment =
      apiFunctions.sentimentObject[statusDescription.split(" ").join("")];
    // create url for GIPHY API request with sentiment search query
    let url =
      "http://api.giphy.com/v1/gifs/search?q=" +
      sentiment +
      "&api_key=dc6zaTOxFJmzC";
    // make API request to GIPHY
    apiFunctions.apiRequest(url, function(parsedObj) {
      console.log(parsedObj.data[0].images.downsized_medium.url);
      return parsedObj.data[0].images.downsized_medium.url;
    });
  },

  // convert TfL status descriptions into search terms for GIPHY
  sentimentObject: {
    GoodService: "love+actually+dance",
    MinorDelays: "friends+joey+shrug",
    ReducedService: "friends+joey+shrug",
    PlannedClosure: "sigh",
    PartClosure: "sigh",
    SevereDelays: "screaming", // todo
    Suspended: "ouch+wall+smash", // todo
    PartSuspended: "ouch+wall+smash", // todo
    BusService: "bus",
    SpecialService: "wut+big+brother" // todo
  }
};

// see top answer: https://stackoverflow.com/questions/6847697/how-to-return-value-from-an-asynchronous-callback-function

apiFunctions.getLineStatus("Central");

if (typeof module !== "undefined") {
  module.exports = apiFunctions;
}
