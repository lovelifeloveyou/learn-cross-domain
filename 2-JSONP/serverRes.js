/**
 * Created by Çñ½¨Ç¿ on 2017/11/29.
 */
var express = require('express');
var app = express();

var responsePort = 3001;

app.get('/', function(req, res) {
    var callbackName = req.query.callback;
    res.send(callbackName+"({'message': 'hello world from JSONP'});");
})

app.listen(responsePort, function() {
    console.log(`jsonp_response server is listening on port ${responsePort}`);
});