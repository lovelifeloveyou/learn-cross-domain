/**
 * Created by Çñ½¨Ç¿ on 2017/11/29.
 */
var express = require('express');
var app = express();

var responsePort = 3001;

app.use(express.static(__dirname + '/staticRes'));

app.listen(responsePort, function() {
    console.log('Responser is listening on port' + responsePort);
});