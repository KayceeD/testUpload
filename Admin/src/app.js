const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send('Hello World,This is Admin Page');
})

module.exports = app