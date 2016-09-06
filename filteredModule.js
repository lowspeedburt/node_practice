var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var fileExt = process.argv[3];
var cb = function(err, data){};


module.exports = function foo(dir,fileExt,cb){

	err = "This is an error";
	if (err) return cb(err);
	fileExt = "." + fileExt;
	data = fs.readdir(dir, function(err,list){
		if (err) return cb(err);
		list = list.forEach(function(elem,index,array){
			if(path.extname(index) == fileExt)
			return element;	
		});
	});
	cb(null,data);

//	function foo(cb(err,data)){
//		if (cb(err)) return cb(err);
//	
//		 
//		return cb(null,data);
//	}
//foo(cb);
//
	//var err = "This is an error";
	//var data = "Wassup";
	//callback(err,data);
//	{
//		if(err) throw err;
//		data = 'hello world';
//		return data;
//	}
//
	

	//console.log(result);





}
	




