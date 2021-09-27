var request = require('request');

var url = 'https://api.nobitex.ir/auth/login/'

var headers = {
    "Content-Type": "application/json"
}
username = "name@example.com";
password = "secret-password-1234";
var form = {"username":username,"password":password};


request({headers: headers,url: url, form: form, method:'Post'}, (err, res, body) => {
    if (err) {
        //console.log(err);
    } else {
        console.log('body:', body);
    }
  });
