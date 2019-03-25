var express = require("express");

var mysql   = require("mysql");


var app = express();


var connection = mysql.createConnection({      //创建mysql实例
		    host:'127.0.0.1',
		    port:'3306',
		    user:'root',
		    password:'123123',
		    database:'exe'
});

connection.connect();

var sql = 'SELECT * FROM user';

connection.query(sql,(err,res)=>{
	if(err){
		console.log('错误');
	};
	console.log(res);

});

app.get('/',(req,res)=>{
	
		res.send('test连接');
	
});


app.listen(3000,function(){
	console.log('run..................');
});
