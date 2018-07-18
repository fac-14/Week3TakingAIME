var apiFunctions = {
  apiRequest: function(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var parsedObj = JSON.parse(xhr.responseText);
        return parsedObj;
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }
};

if (typeof module !== "undefined") {
  module.exports = apiFunctions;
}
