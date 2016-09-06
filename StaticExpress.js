var express = require("express");
var port = process.argv[2];
var index_html = process.argv[3];
var app = express();


app.use(express.static(index_html || path.join(__dirname, "public")));
app.listen(port);
