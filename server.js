
const csv = require('csv-parser');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var express = require('express')
var fs = require('fs')
var app = express()
var path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
        { id: 'name', title: 'name' },
        { id: 'filling', title: 'filling' },
        { id: 'Dishtype', title: 'Dishtype' },
        { id: 'DishNoodle', title: 'DishNoodle' },
        { id: 'DishCurry', title: 'DishCurry' },
        { id: 'DishStirfry', title: 'DishStirfry' },
        { id: 'drink', title: 'drink' },
        { id: 'message', title: 'message' },

    ]
});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));



app.post('/order', function (req, res) {
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
    var jsonObject = JSON.stringify(req.body);
    console.log(jsonObject)

    console.log('Order Recieved')
    console.log(hours + ":" + minutes + ":" + seconds + "  " + date + "-" + month + "-" + year);
    console.log(req.body)
    csvWriter
        .writeRecords(req.body)
        .then(() => console.log('The CSV file was written successfully'));

    /////////
    res.writeHead(301, { Location: '/OrderPlaced.html' });
    res.end();
    return (res)
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, function () {
    console.log('Server running on 8080...');
});

