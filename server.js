var ntwitter = require('ntwitter');
var express = require("express"),
app = express(),
http = require("http"),
port = process.env.PORT || 1337;
var ntwitter = require("ntwitter"),

credentials = require("./credentials.json"),

twitter = ntwitter(credentials);


var coolObject = {"my": 12345};
var toDos = [];
// �������� ����� twitter � ����� �����������, ������������ ��������

twitter.stream(
// ������ �������� � ������
"statuses/filter",

// ������ �������� � ������, ���������� ������ �� �������, �. �� ����
{ "track": ["awesome", "cool", "rad", "gnarly", "groovy" ]},

// ������ �������� � �������� �����, �������������, ����� ����� ������
function(stream) {

	stream.on("data", function(tweet) {
	console.log(tweet.text);

	});
}
);



//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// �������� HTTP-������ �� ���� Express
http.createServer(app).listen(port);

 app.get("/someway.json", function (req, res) {
res.json(coolObject);
});


app.use(express.urlencoded());
app.post("/todos", function (req, res) {
  // ������ ������ ����������� � req.body
  var newToDo = req.body;
  //console.log(newToDo);
  res.json({"message":"�� ���������� ����������� �� �������!" + newToDo.Id});
  toDos.push(newToDo.Id);
  // ���������� ������� ������//res.json({"message":"�� ���������� ����������� �� ������� � ������� toDos" + toDos[0]});
});
