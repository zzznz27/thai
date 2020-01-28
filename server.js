var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var express = require('express')
var fs = require('fs')
var app = express()
var path = require('path');

var bodyParser = require('body-parser');

// USed to delay while awaiting animation to finish
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.post('/order', async function (req, res) {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();


    console.log('Order Recieved')
    console.log(hours + ":" + minutes + ":" + seconds + "  " + date + "-" + month + "-" + year);
    console.log(req.body)

    await sleep(1000);
    /////////
    res.writeHead(301, {
        Location: '/OrderPlaced.html'
    });
    res.end();
    return (res)
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, function () {
    console.log('Server running on 8080...');
});