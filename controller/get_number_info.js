const getNumberInfo = function( number ){

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("GET", "https://api.telnyx.com/origination/numbers/"+number);
    xhr.setRequestHeader("x-api-user", "PDcczTxfJyD8HwYdJzAYy4ya");
    xhr.setRequestHeader("x-api-token", "EzKUrkYMJjM34CeMchrDh71T");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.log(xhr.status + " " + xhr.statusText);
            return;
        }
        try {
            var response = JSON.parse(xhr.responseText);
            //var data = parseData(response['result']);
            console.log(response);
            //callback(data);
            //resolve();
        } catch (e) {
            // statusChangeCallback({error: e});
        }
    };
    xhr.send(null);

}

module.exports = getNumberInfo;

