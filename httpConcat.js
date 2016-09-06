var concatStream = require("concat-stream");
var http = require("http");
var url = process.argv[2];

var r = http.get(url,function (response){
	response.pipe(concatStream(function (data){
		var intCount = data.length;
		console.log(intCount);
		console.log(data.toString());
	}))
});
