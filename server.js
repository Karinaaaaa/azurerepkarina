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
// настроим поток twitter с тремя параметрами, разделенными запятыми

twitter.stream(
// первый параметр — строка
"statuses/filter",

// второй параметр — объект, содержащий массив со словами, к. мы ищем
{ "track": ["awesome", "cool", "rad", "gnarly", "groovy" ]},

// третий параметр — обратный вызов, срабатывающий, когда поток создан
function(stream) {

	stream.on("data", function(tweet) {
	console.log(tweet.text);

	});
}
);



//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// создадим HTTP-сервер на базе Express
http.createServer(app).listen(port);

 app.get("/someway.json", function (req, res) {
res.json(coolObject);
});



app.post("/todos", function (req, res) {
  // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  //console.log(newToDo);
  toDos.push(newToDo);
  // отправляем простой объект
  res.json({"message":"Вы разместили комментарий на сервере!" + newToDo});

});
