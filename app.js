const express = require("express");
const bodyParser = require("body-parser");
const { nanoid } = require('nanoid')


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html");

});


app.post("/", function(req,res){

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  //var dateTime = date+' '+time;

  var FName = req.body.fName;
  var LName = req.body.lName;

  res.write("<h1> Generated unique id: " + nanoid(10) + "</h1>");
  res.write("<hr style='padding: 10; color: grey'>");
  res.write("<br>User Name: " + FName + " " + LName);
  res.write("<br>Date: " + date);
  res.write("<br>Time: " + time);

  res.send();

});


app.listen(3000, function(){
  console.log("Server is running at 3000");
});
