var mysql = require('mysql');
const csv = require('csv-parser');
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

var con = mysql.createConnection({
    host: "137.154.45.220",
    user: "root",
    password: "thai",
    database: "orders"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

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
    let time = hours + ":" + minutes + ":" + seconds + "  " + date + "-" + month + "-" + year
    console.log(hours + ":" + minutes + ":" + seconds + "  " + date + "-" + month + "-" + year);
    console.log(typeof req.body.filling)
    
    let dish ="";
    if (req.body.DishNoodle != "Select Option"){
        dish = req.body.DishNoodle
    }
    if (req.body.DishCurry != "Select Option"){
        dish = req.body.DishCurry
    }
    if (req.body.DishStirfry != "Select Option"){
        dish = req.body.DishStirfry
    }

    console.log('Dish: ' + dish);
    let order = {name: req.body.name, filling:req.body.filling, dishType:req.body.dishType, dish:dish, drink:req.body.drink, requirements:req.body.message, orderDate:date_ob}
    var query = "INSERT INTO orders SET ?";

    con.query(query,order, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
  
    res.writeHead(301, { Location: '/OrderPlaced.html' });
    res.end();
    return (res)
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/list', function (req, res) {
    var query = "SELECT * FROM orders"
     con.query(query, function (err, result) {
        if (err) throw err;
        console.log( typeof result);
        console.log("1 r");
        //var myJSON = JSON.stringify(result);
        res.send( result);
      });
      

});
app.post('/dates', function (req, res) {
    console.log(req)
});

app.listen(8080, function () {
    console.log('Server running on 8080...');
});