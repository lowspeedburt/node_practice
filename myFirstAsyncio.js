var fs = require('fs');

var myFile = fs.readFile(process.argv[2],'utf8',function(err,data){
	if (err){
		throw err;
	}else{
		var mySplit = data.split('\n');
		var count = 0;
		for (var i = 0; i < mySplit.length; i++){
			count += 1;
		}
		count-= 1;
		console.log(count);
	}
});


