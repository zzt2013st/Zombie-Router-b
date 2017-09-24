const buyNumber = function( arrOfNumbers ){

    var params = {
        "requested_numbers": arrOfNumbers

    };
    var paramsStr = JSON.stringify(params);

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("POST", "https://api.telnyx.com/origination/number_orders");
    xhr.setRequestHeader("x-api-user", "xNssyQ96kRpgEidLiUtzZbTQ");
    xhr.setRequestHeader("x-api-token", "xzC1qtyZAxWELNfJWLzCsRnd");
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

    xhr.send(paramsStr);



}

module.exports = buyNumber;

