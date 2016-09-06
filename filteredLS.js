var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var fileExt = '.'+ process.argv[3];
var myDir = fs.readdir(dir, function(err,list){
	if (err) throw err;
	list = list.forEach(function(elem,index,array){
		if(path.extname(elem)==fileExt)
		console.log(elem);
	})
})

