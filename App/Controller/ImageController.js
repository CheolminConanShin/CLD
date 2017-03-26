export var ImageController = {
    baseURL: "http://localhost:3333/",
    getImage: function(url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.ontimeout = function () {
            console.error("The request for " + url + " timed out.");
        };

        xhr.onload = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(xhr.responseText);
                } else {
                    console.error(xhr.statusText);
                }
            }
        };

        xhr.open("GET", ImageController.baseURL + url, true);
        xhr.timeout = 2000;
        xhr.send(null);
    }
}