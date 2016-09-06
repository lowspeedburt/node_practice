// sets up a jade (should be a pug) template and renders new data on runtime
var express = require("express");
const path = require("path");
const jade = require('jade');
var file_path = process.argv[3];
var port = process.argv[2];
var app = express();
//const pug = require('pug');
//var pug_file = "./index.pug";

app.get("/home",function(req,res){
	res.render("index",{date: new Date().toDateString()});

})

app.set('views', file_path)
app.set("view engine", "jade");

app.listen(port);

