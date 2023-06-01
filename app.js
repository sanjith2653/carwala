
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/loginform");
const contactSchema = new mongoose.Schema({
  Name: String,
  
  email: String,
  pwd1: String,
  pwd2: String,
  tel: String,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.post("/submit", function (req, res) {
  var name = req.body.Name;
  var Email = req.body.email;
  var pwd1 = req.body.pwd1;
  var pwd2 = req.body.pwd2;
  var Tel = req.body.tel;
  const login = mongoose.model("login", contactSchema);
  const contact = new login({
    Name: name,
    email: Email,
    pwd1: pwd1,
    pwd2: pwd2,
    tel: Tel,
});
  contact.save();
  console.log("success fully saved");
});

app.listen(5500);