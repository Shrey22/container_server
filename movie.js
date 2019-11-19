var express = require("express")
var mysql = require("mysql")
var movierouter = express();

var connection = mysql.createConnection({
    host : '192.168.44.13',
    user:'root',
    password:'manager',
    database:'mean_exam.db',
	port:'3307'
});

connection.connect();
var data = [];
movierouter.get("/",function(req,res){
    let query = "select * from movies";
    connection.query(query,function(err,result){
        if(err == null)
        {
            data = result;
            res.contentType("application/json");
            res.send(JSON.stringify(data));
        }
        else 
        {
            res.send(err);
        }
    });
});

module.exports = movierouter;

