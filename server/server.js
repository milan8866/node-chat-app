const path = require('path');
const publicpath  = path.join(__dirname,'../public');
const express = require('express');
var app = express();
app.use(express.static(publicpath));
const port = process.env.PORT || 3000;


console.log(__dirname +'/../public');
console.log(publicpath);
app.listen(port,()=>{

	console.log('server is up on' +port);
});