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
          document.getElementById("line-status-text").innerHTML =
            lineStatus + " on<br>" + lineName;
          // append emoji text
          apiFunctions.getEmoji(lineStatus);
          // get appropriate gif
          return apiFunctions.getGif(lineStatus);
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
      "https://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC&tag=" +
      sentiment;
    // make API request to GIPHY
    apiFunctions.apiRequest(url, function(parsedObj) {
      document.getElementById("giphy-gif").src =
        parsedObj.data.images.fixed_height.url;
      document.getElementById("giphy-gif").classList.remove("hidden-img");
      document.getElementById("giphy-gif").classList.add("reveal-img");
    });
  },

  getEmoji: function(statusDescription) {
    let sentiment =
      apiFunctions.emojiObject[statusDescription.split(" ").join("")];
    document.getElementById("line-status-text").innerHTML += sentiment;
  },

  // convert TfL status descriptions into search terms for GIPHY
  sentimentObject: {
    GoodService: "happy-dancing",
    MinorDelays: "shrugging",
    ReducedService: "shrugging",
    PlannedClosure: "sighing",
    PartClosure: "sighing",
    SevereDelays: "screaming",
    Suspended: "impatient",
    PartSuspended: "impatient",
    BusService: "bus",
    SpecialService: "nah"
  },

  // emojis to append to line status
  emojiObject: {
    GoodService: " 🎉😍🎉",
    MinorDelays: " 🙄🙄🙄",
    ReducedService: " 🤨🤨🤨",
    PlannedClosure: " 😩😫😖",
    PartClosure: " 😩😫😖",
    SevereDelays: " 😬😡😭",
    Suspended: " 😠🤬👊",
    PartSuspended: " 😠🤬👊",
    BusService: " 🚌🚌🚌",
    SpecialService: " 🤔🤔🤔"
  },

  // colors for logo and submit button changing
  logoColorObject: {
    bakerloolist: "#894E25",
    centrallist: "#DD2420",
    circlelist: "#FFCE02",
    districtlist: "#03722A",
    handclist: "#D899AF",
    jubileelist: "#697277",
    metrolist: "#740F55",
    northernlist: "#000000",
    piccadillylist: "#0019A8",
    victorialist: "#02A0E2",
    wandclist: "#75D0BD",
    dlrlist: "#00AFAD",
    overgroundlist: "#E86911",
    tflraillist: "#0019A8"
  },

  // colors for changing background
  bgColorObject: {
    bakerloolist: "rgba(174, 97, 24, 0.1)",
    centrallist: "rgba(228, 31, 31, 0.1)",
    circlelist: "rgba(248, 212, 45, 0.1)",
    districtlist: "rgba(0, 165, 117, 0.1)",
    handclist: "rgba(232, 153, 168, 0.1)",
    jubileelist: "rgba(143, 152, 158, 0.1)",
    metrolist: "rgba(137, 50, 103, 0.1)",
    northernlist: "rgba(0, 0, 0, 0.1)",
    piccadillylist: "rgba(4, 80, 161, 0.1)",
    victorialist: "rgba(0, 159, 224, 0.1)",
    wandclist: "rgba(112, 195, 206, 0.1)",
    dlrlist: "rgba(0, 187, 180, 0.1)",
    overgroundlist: "rgba(248, 108, 0, 0.1)",
    tflraillist: "rgba(4, 80, 161, 0.1)"
  }
};

if (typeof module !== "undefined") {
  module.exports = apiFunctions;
}
