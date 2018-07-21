function apiRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var parsedObj = JSON.parse(xhr.responseText);
        return callback(parsedObj);
      } else {
        displayError();
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getLineStatus(lineName) {
  let url = `https://api.tfl.gov.uk/line/${lineName}/status?details=false`;
  apiRequest(url, function(line) {
    var lineStatus = line[0].lineStatuses[0].statusSeverityDescription;
    renderLineStatus(lineStatus, line[0].name);
    getGif(removeWhitespace(lineStatus));
  });
}

function getGif(lineStatus) {
  var searchTerm = getValue("sentiment", lineStatus);
  let url = `https://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC&tag=${searchTerm}`;
  apiRequest(url, function(gifObj) {
    renderGif(gifObj);
  });
}

function removeWhitespace(string) {
  return string.replace(/ /g, "");
}
