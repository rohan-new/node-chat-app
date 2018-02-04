const express = require('express');
const path = require('path');

var app = express();
const pathjoin = path.join(__dirname, '../public');

app.use(express.static(pathjoin));

app.listen(3000,()=>{
    console.log('server started');
});