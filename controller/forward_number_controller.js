const forwardNumber = function( number, forwardNumber ){

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("PUT", "https://api.telnyx.com/origination/numbers/"+number);
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
            console.log(e);
            // statusChangeCallback({error: e});
        }
    };

    var params = {
        "number": {
            "forwards_to": forwardNumber,
            "forwarding_type": 'always'
        }
    };
    xhr.send( JSON.stringify(params) );

}

module.exports = forwardNumber;

