var getNumber = function( cityName, stateName, callback ) {
    //get the params
    var params = {
        "search_type": 2,
        "search_descriptor": {}
    };
    params['search_descriptor']['city'] = cityName;
    params['search_descriptor']['state'] = stateName;
    var paramsStr = JSON.stringify(params);

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var oReq = new XMLHttpRequest();
    var url = "https://api.telnyx.com/origination/number_searches";

    oReq.open("post", url);

    //var scope = this;

    //return new Promise
    //{
        oReq.onload = function () {
            if (oReq.status !== 200) {
                console.log(oReq.status + " " + oReq.statusText);
                return;
            }
            try {
                var response = JSON.parse(oReq.responseText);
                var data = parseData(response['result']);
                console.log(data);
                callback(data);
                //resolve();
            } catch (e) {
                // statusChangeCallback({error: e});
            }
        };
    //}

    oReq.send(paramsStr);
};


var parseData = function(data){
    var numberList = [];
    for( var i = 0; i< data.length; i++ ){
        var itm = data[i];
        var map = {};
        //console.log(itm);
        map['number'] = itm['number_e164'];
        map['monthly_recurring_cost'] = itm['monthly_recurring_cost'];
        map['upfront_cost'] = itm['upfront_cost'];
        numberList.push(map)
    }
    return numberList;
}

// getNumber.prototype.getNumberList = function(){
//     return this.numberMap;
// }


module.exports = getNumber;