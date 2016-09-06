var fs = require('fs');

var result = fs.readFileSync(process.argv[2]);
result = result.toString();
result = result.split('\n');
var count = 0;

for (var i = 0; i < result.length;i++) {
	count += 1
}
count -= 1;

console.log(count);
