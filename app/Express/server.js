var express = require("express"),
app = express(),
stream = require("./stream.js"),
http = require("http"),
port = process.env.PORT || 1337;

var mongoose= require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;
mongoose.connect(connectionString);

var CommSchema = mongoose.Schema
({

"title" : String,

"commentariy" : String

});

var com1 = mongoose.model("Comm", CommSchema);

var c1 = new com1({"title":"Doggie", "commentariy":"goodie"});

c1.save(function (err) 
{

if (err !== null) 
		{
console.log(err);
console.log("������ �� ��� ��������!");
		} else 
	{
console.log("������ ��� ��������!");
	}

});

com1.find({"title" : "bad"}, function (err, comments) 
	{

comments.forEach(function (com) 
		{
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
res.json(stream);
});


app.use(express.bodyParser());
app.post("/todos", function (req, res) 
{
  // ������ ������ ����������� � req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  // ���������� ������� ������
  res.json({"message":"�� ���������� ������ �� �������!"});
});

