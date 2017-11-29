/**
 * Created by ��ǿ on 2017/11/29.
 */
var express = require('express');
var app = express();

var responsePort = 3001;

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    //������������origin������3000�˿ڷ��ʱ��˿ڣ�3001��
    res.send("Hello word from CORD");
});

app.listen(responsePort, function() {
    console.log('cors_response is listening on port ' + responsePort);
});