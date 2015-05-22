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

  // ÑÐµÐ¹Ñ‡Ð°Ñ Ð¾Ð±ÑŠÐµÐºÑ‚ ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÐµÑ‚ÑÑ Ð² req.body
  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  // Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÑÐµÐ¼ Ð¿Ñ€Ð¾ÑÑ‚Ð¾Ð¹ Ð¾Ð±ÑŠÐµÐºÑ‚
  res.json({"message":"Ð’Ñ‹ Ñ€Ð°Ð·Ð¼ÐµÑÑ‚Ð¸Ð»Ð¸ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð½Ð° ÑÐµÑ€Ð²ÐµÑ€Ðµ!"});
});


mongoose.connect (ConnectoinString);
var CommSchema = mongoos.Schema({
title : String,
commentariy : String
});
//Ð¡Ð¾Ð·Ð´Ð°Ð´Ð¸Ð¼ Ð¾Ð±ÑŠÐµÐºÑ‚ Comm Ð¿Ð¾ ÑÑ…ÐµÐ¼Ðµ CommSchema
var com1 = mongoose.model("com1", CommSchema);


var c1 = new com1({"title":"Doggie", "commentariy":"bad"});
//Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ðµ Ð² Ñ…Ñ€Ð°Ð½Ð¸Ð»Ð¸Ñ‰Ðµ
c1.save(function (err) {
if (err !== null) {
// Ð¾Ð±ÑŠÐµÐºÑ‚ Ð½Ðµ Ð±Ñ‹Ð» ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½
console.log("Object was not saved!");
console.log(err);
console.log(c1.title);
} else {
console.log("Object was saved!");
}
});

//ÐÐ°Ð¹Ñ‚Ð¸ Ð·Ð°Ð¿Ð¸ÑÐ¸
com1.find({"commentariy":"bad"}, function (err, comments) {
  console.log(comments);

  comments.forEach(function (com) {
    console.log(com);
    // Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÐ¼ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹ Ñ Ð·Ð°Ð³Ð¾Ð»Ð¾Ð²ÐºÐ¾Ð¼ "bad"
    com.commentariy = "the best!";
    // ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÐµÐ¼ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð½Ñ‹Ð¹ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹
    com.save(function (err) {
      if (err) {
        // ÐµÑÐ»Ð¸ Ð¾Ð±ÑŠÐµÐºÑ‚ Ð½Ðµ Ð±Ñ‹Ð» ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½

  var newToDo = req.body;
  console.log(newToDo);
  toDos.push(newToDo);
  // îòïðàâëÿåì ïðîñòîé îáúåêò
  res.json({"message":"Âû ðàçìåñòèëè äàííûå íà ñåðâåðå!"});
});


// £Ð´Ð°Ð»Ð¸Ñ‚ÑŒ
com1.remove({ "title":"Doggie", "commentariy":"goodie" }, function (err) {
  if (err !== null) {
    // ÐµÑÐ»Ð¸ Ð¾Ð±ÑŠÐµÐºÑ‚ Ð½Ðµ Ð±Ñ‹Ð» ÑƒÑÐ¿ÐµÑˆÐ½Ð¾ ÑƒÐ´Ð°Ð»ÐµÐ½    console.log(deletion);

    console.log(err);
  }
  });