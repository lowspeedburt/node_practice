
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

