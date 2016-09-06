var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var path = process.argv[3];
var port = process.argv[2];


app.post("/form",function (req,res){
	app.use(bodyparser.urlencoded({extended: false}));
	req.body.str.split("").reverse().join("");
})

app.listen(port);
