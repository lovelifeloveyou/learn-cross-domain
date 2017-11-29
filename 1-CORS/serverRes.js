/**
 * Created by 邱建强 on 2017/11/29.
 */
var express = require('express');
var app = express();

var responsePort = 3001;

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    //设置允许跨域的origin，允许3000端口访问本端口（3001）
    res.send("Hello word from CORD");
});

app.listen(responsePort, function() {
    console.log('cors_response is listening on port ' + responsePort);
});