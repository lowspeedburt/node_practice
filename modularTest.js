var fs = require("fs");
var myModule = require("./filteredModule.js");
var dir = process.argv[2];
var fileExt = process.argv[3];
var err = "this is an error!";
var cb = function(err, data){};
var result = myModule(dir,fileExt,cb);

//var dir = process.argv[2];
//var fileExt = '.'+ process.argv[3];

//var a = result(dir,fileExt); 
console.log(result);

function f() {
	    console.log('f was called!');
}

function callFunction(func) {
	    func();
}

//callFunction(f);


