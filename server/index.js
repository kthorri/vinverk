var request = require("request");

var options = {
    method: 'GET',
    url: 'https://www.vinbudin.is/addons/origo/module/ajaxwebservices/search.asmx/DoSearch',
    qs: {
        category: 'white',
        skip: '0',
        count: '999',
        orderBy: 'random',
        shop: '105'
    },
    headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});