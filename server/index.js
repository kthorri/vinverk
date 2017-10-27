var request = require("request");

var options = { method: 'GET',
  url: 'https://www.vinbudin.is/addons/origo/module/ajaxwebservices/search.asmx/DoSearch',
  qs: 
   { category: 'white',
     skip: '0',
     count: '999',
     orderBy: 'random',
     shop: '105' },
  headers: 
   { 'postman-token': '30a97b68-edf4-53f4-c8b5-75de9f783e0e',
     'cache-control': 'no-cache',
     'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
