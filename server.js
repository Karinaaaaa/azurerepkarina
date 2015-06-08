var express = require("express"),
app = express(),
//stream = require("./stream.js"),
http = require("http"),
port = process.env.PORT || 1337;

var mongoose= require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;
mongoose.connect(connectionString);


app.use(express.bodyParser());

var CommSchema = new mongoose.Schema
({

id : String,

commentariy : String

});

var com1 = mongoose.model("Comm", CommSchema);

// var c1 = new com1({"id":"Doggie", "commentariy":"goodie"});

// c1.save(function (err) 
// {

// if (err !== null) 
// 		{
// console.log(err);
// console.log("Объект не был сохранен!");
// 		} else 
// 	{
// console.log("Объект был сохранен!");
// 	}

// });

//"id" : "http://farm1.staticflickr.com/543/17860695134_457dc23186_m.jpg"
 function cf () {
 	var comM = "sssss";
 	com1.find({"id" : "http://farm1.staticflickr.com/543/17860695134_457dc23186_m.jpg"}, function (err, comments) 
	{
		if(err)
			{
				comM=err;
			}

comments.forEach(function (com) 
		{
			comM = com[commentariy];
//com.commentariy = "the best!";

// com.save(function (err) 
// 			{

// 	if (err)	
// 				{


// console.log(err);

// 				}
// 				else {
// 					}


// 			});

		});

	});
	return comM;
};
//function ca () {return "sdjf";}
/*com1.remove({"id":"Doggie", "commentariy":"goodie"}, function(err)
{
	if(err!== null)
	{
		console.log(err);
	}
});*/

var coolObject = {my: 12345};
var toDos = [];

//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// создадим HTTP-сервер на базе Express
http.createServer(app).listen(port);

app.get("/someway.json", function (req, res)
{
	var jhjhn = cf();
res.json(jhjhn);
});




 var ToDB = function (newId, newComment)
 		{
 			var com11 = new com1  ({"id" : newId, "commentariy" : newComment });
 			com11.save(function (err, result) 
{

if (err !== null) {
console.log(err);
		}
		else 
	{
console.log("Объект был сохранен!");
	}
}


);
 		};



app.post("/todos", function (req, res) 
{
  // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  console.log(newToDo);
 
  ToDB(newToDo.Id, newToDo.comment);
  // отправляем простой объект
  res.json(newToDo);
});
