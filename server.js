var express = require("express"),
app = express(),
stream = require("./stream.js"),
http = require("http"),
port = process.env.PORT || 1337;


var coolObject = {my: 12345};
var toDos = [];

//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));

// создадим HTTP-сервер на базе Express
http.createServer(app).listen(port);

app.get("/someway.json", function (req, res) {
res.json(stream);
});


app.use(express.bodyParser());
app.post("/todos", function (req, res) {
  // сейчас объект сохраняется в req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  // отправляем простой объект
  res.json({"message":"Вы разместили данные на сервере!"});
});

var mongoose=require("mongoose"),
var CommSchema = mongoose.Schema({
title : String,
commentariy : String
});
//Создадим объект Comm по схеме CommSchema
var com1 = mongoose.model("Comm", CommSchema);


var c1 = new сom1({"title":"Doggie", "commentariy":"goodie"});
//Сохранение в хранилище
c1.save(function (err) {
if (err !== null) {
// объект не был сохранен
console.log(err);
} else {
console.log("Объект не был сохранен!");
}
});

//Найти записи
Comm.find({"title" : "bad"}, function (err, comments) {
  comments.forEach(function (com) {
    // обновляем комментарий с заголовком "bad"
    com.commentariy = "the best!";
    // сохраняем измененный комментарий
    com.save(function (err) {
      if (err) {
        // если объект не был сохранен
        console.log(err);
      }
    });
  });
});
//Удалить
Comm.remove({ "title":"bad", "commentariy":"the best!" }, function (err) {
  if (err !== null) {
    // если объект не был успешно удален
    console.log(err);
  }
  });

