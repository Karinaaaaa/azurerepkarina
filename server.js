var express = require("express"),
app = express(),
//stream = require("./stream.js"),
http = require("http"),
port = process.env.PORT || 1337;


var mongoose= require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;
mongoose.connect(connectionString);

var CommSchema = mongoose.Schema
({

var coolObject = {my: 12345};
var toDos = [];

var mongoose=require("mongoose"),
//mongoUrl="mongodb://localhost/test";
var ConnectoinString=process.env.CUSTOMCONNSTR_MONGOLAB_URL;
//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));
app.use(express.bodyParser());


id : String,

commentariy : String

});

var com1 = mongoose.model("Comm", CommSchema);


var cc = function(Doggie,goodie){
	var c1 = new com1({"title":Doggie, "commentariy":goodie});
	c1.save(function (err) {

if (err !== null) 
		{
console.log(err);
console.log("������ �� ��� ��������!");
		} else 
	
console.log("������ ��� ��������!");
	}
	)
};


mongoose.connect (ConnectoinString);
var CommSchema = mongoos.Schema({
title : String,
commentariy : String

});

var ff= function(){
com1.find({"title" : "bad"}, function (err, comments) {

comments.forEach(function (com) {
com.commentariy = "the best!";

com.save(function (err) 
			{

	if (err)	
				{


console.log(err);

				}

			});

		});

	});
};


/*com1.remove({"title":"Doggie", "commentariy":"goodie"}, function(err)
{
	if(err!== null)
	{
		console.log(err);
	}
});
*/
var coolObject = {my: 12345};
var toDos = [];

//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// �������� HTTP-������ �� ���� Express
http.createServer(app).listen(port);

app.get("/someway.json", function (req, res)
{
res.json("stream");
});



var fff= function(newId,newcomment){

var comff = new com1({ "id":newId, "commentariy":newcomment });
var comff.save(function (err,result) 
{
  if (err !== null) {
    // если объект не был успешно удален    console.log(deletion);
    console.log(err);
  }
  else{

console.log("������ ��� ��������");
}
}

 ); };



app.post("/todos", function (req, res) 
{
  // ������ ������ ����������� � req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
   fff(newToDo.Id,newToDo.Comment);
  // ���������� ������� ������
  res.json(newToDo);
});


// �далить

};
