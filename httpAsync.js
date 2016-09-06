var http = require("http");
var concatStream = require("concat-stream");
var Promise = require("bluebird");
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];


function result1 (){
	return new Promise(function (resolve,reject){
		http.get(url1,function (response){
	response.pipe(concatStream(function (data){
		resolve(data.toString());
	}));
	response.on("error",function (error){
				if( error) reject(error);
			})
		})
	})

}


function result2 (){
	return new Promise(function (resolve,reject){
		http.get(url2,function (response){
	response.pipe(concatStream(function (data){
		resolve(data.toString());
	}));
	response.on("error",function (error){
				if( error) reject(error);
			})
		})
	})

}


function result3 (){
	return new Promise(function (resolve,reject){
		http.get(url3,function (response){
	response.pipe(concatStream(function (data){
		resolve(data.toString());
	}));
	response.on("error",function (error){
				if( error) reject(error);
			})
		})
	})

}

var r1 = result1().then(function (data){
	 var r1Data = data;
	 return new Promise (function (resolve){
		 resolve(r1Data);
	 })
	 
})
var r2 = result2().then(function (data){
	 var r2Data = data;
	 return new Promise (function (resolve){
		 resolve(r2Data);
	 })
	 
})
var r3 = result3().then(function (data){
	 var r3Data = data;
	 return new Promise (function (resolve){
		 resolve(r3Data);
	 })
	 
})

r1.then(function (data){
	console.log(data);
})
r2.then(function (data){
	console.log(data);
})
r3.then(function (data){
	console.log(data);
})

//console.log(r1);

//console.log(r2);
//console.log(r3);
