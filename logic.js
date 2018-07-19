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
          // line status variable
          var lineStatus = line.lineStatuses[0].statusSeverityDescription;
          // puts line status text into DOM
          document.getElementById("line-status-text").textContent =
            lineStatus;
          console.log(lineStatus);
          // append emoji text
          apiFunctions.getEmoji(lineStatus);
          // get appropriate gif
          return apiFunctions.getGif(
            lineStatus
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
      document.getElementById("giphy-gif").src =
        parsedObj.data[0].images.downsized.url;
      document.getElementById("giphy-gif").classList.remove("hidden-img");
      document.getElementById("giphy-gif").classList.add("reveal-img");
    });
  },

  getEmoji: function(statusDescription) {
    let sentiment = apiFunctions.emojiObject[statusDescription.split(" ").join("")];
    document.getElementById("line-status-text").textContent += sentiment;
  },

  // convert TfL status descriptions into search terms for GIPHY
  sentimentObject: {
    GoodService: "love+actually+dance",
    MinorDelays: "friends+joey+shrug",
    ReducedService: "friends+joey+shrug",
    PlannedClosure: "sigh",
    PartClosure: "sigh",
    SevereDelays: "screaming",
    Suspended: "ouch+wall+smash",
    PartSuspended: "ouch+wall+smash",
    BusService: "bus",
    SpecialService: "drew+scanlon"
  },

  emojiObject: {
    GoodService: " - woohoo! 🎉😍🎉",
    MinorDelays: " - 🙄🙄🙄",
    ReducedService: " - 🤨🤨🤨",
    PlannedClosure: " - 😩😫😖",
    PartClosure: " - 😩😫😖",
    SevereDelays: " - 😬😡😭",
    Suspended: " - 😠🤬👊",
    PartSuspended: " - 😠🤬👊",
    BusService: " - 🚌🚌🚌",
    SpecialService: " - 🤔🤔🤔"
  }
};

// see top answer: https://stackoverflow.com/questions/6847697/how-to-return-value-from-an-asynchronous-callback-function

if (typeof module !== "undefined") {
  module.exports = apiFunctions;
}

// change background color depending on tube line
//
// console.log(document.getElementById("bakerloo-list").textContent);
