var apiFunctions = {
  apiRequest: function(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        return JSON.parse(xhr.responseText);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }
};

if (typeof module !== "undefined") {
  module.exports = apiFunctions;
}
