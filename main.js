var express = require("express")
var movierouter = require("./movie")
var app = express();

app.use(express(JSON));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/movie",movierouter);

app.listen(4000,()=>{
    console.log("SERVER STARTED at 4000...");
})
