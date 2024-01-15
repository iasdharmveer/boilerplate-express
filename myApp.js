const { configDotenv } = require('dotenv');
let express = require('express');
require("dotenv").config()
let app = express();
app.use((req, res, next) => {
    const logMessage = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logMessage);
    next();
});
console.log("Hello World");

app.get("/", (req, res)=>{
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
})

app.use("/public",express.static(__dirname + "/public"));

app.get("/json", (req, res)=> {

    const message= {"message": "Hello json"};
    if(process.env.MESSAGE_STYLE === "uppercase"){
        message.message=message.message.toUpperCase();

    }
    res.json(message);
})
app.get('/env', (req, res) => {
    res.send(process.env.MESSAGE_STYLE);
})

































 module.exports = app;
