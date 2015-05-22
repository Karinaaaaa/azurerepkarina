var express = require("express"),
app = express(),
stream = require("./stream.js"),
http = require("http"),
port = process.env.PORT || 1337;

var coolObject = {my: 12345};
var toDos = [];

var mongoose=require("mongoose"),
//mongoUrl="mongodb://localhost/test";
var ConnectoinString=process.env.CUSTOMCONNSTR_MONGOLAB_URL;
//app.use(express.urlencoded());
app.use(express.static(__dirname + "/client"));


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


mongoose.connect (ConnectoinString);
var CommSchema = mongoos.Schema({
title : String,
commentariy : String
});
//Создадим объект Comm по схеме CommSchema
var com1 = mongoose.model("com1", CommSchema);


var c1 = new com1({"title":"Doggie", "commentariy":"bad"});
//Сохранение в хранилище
c1.save(function (err) {
if (err !== null) {
// объект не был сохранен
console.log("Object was not saved!");
console.log(err);
console.log(c1.title);
} else {
console.log("Object was saved!");
}
});

//Найти записи
com1.find({"commentariy":"bad"}, function (err, comments) {
  console.log(comments);

  comments.forEach(function (com) {
    console.log(com);
    // обновляем комментарий с заголовком "bad"
    com.commentariy = "the best!";
    // сохраняем измененный комментарий
    com.save(function (err) {
      if (err) {
        // если объект не был сохранен

  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  // ���������� ������� ������
  res.json({"message":"�� ���������� ������ �� �������!"});
});


// �далить
com1.remove({ "title":"Doggie", "commentariy":"goodie" }, function (err) {
  if (err !== null) {
    // если объект не был успешно удален    console.log(deletion);

    console.log(err);
  }
  });

