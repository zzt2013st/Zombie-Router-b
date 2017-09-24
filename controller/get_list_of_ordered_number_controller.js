const getOrderedNumbers = function(callback){

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("GET", "https://api.telnyx.com/origination/numbers");
    xhr.setRequestHeader("x-api-user", "xNssyQ96kRpgEidLiUtzZbTQ");
    xhr.setRequestHeader("x-api-token", "xzC1qtyZAxWELNfJWLzCsRnd");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send({});
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var data = this.responseText;
            var jsonResponse = parseData(JSON.parse(data));
            callback(jsonResponse);
      }
    });
}


function parseData(data){

    return data.map(function(itm){
        return itm['number_val_e164'];
    });


}

module.exports = getOrderedNumbers;