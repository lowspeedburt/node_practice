function addit () {
	var myNum = process.argv.slice(2);
	var myArray = myNum.reduce(function(pre,curr) {
		return (Number(pre) + Number(curr));
	})
	console.log(myArray);
}
addit();
