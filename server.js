var express = require("express");
var session =require("express-session");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();


var userCtrl = require("./server/controllers/userCtrl")
var wodCtrl = require("./server/controllers/wodCtrl")
var User = require("./server/models/userSchema.js")
var Wod = require("./server/models/wod.js")
var corsOptions = {
  origin: "http://localhost:8100"
}
mongoose.connect("mongodb://localhost/xFit")
// app.use(express.static('/www'));
app.use(bodyParser.json(corsOptions))
app.use(cors())

app.get("/api/user", userCtrl.getAllUsers)
app.post("/api/user", userCtrl.addUser)
app.put("/api/user/:id", userCtrl.updateUser)


app.get("/api/wod", wodCtrl.getAllWods)
app.post("/api/wod", wodCtrl.addWod)
app.put("/api/wod/:id", wodCtrl.editWod)
app.delete("/api/wod/:id", wodCtrl.deleteWod)




var port = 8100;
app.listen(port, function(){
  console.log("Listening to " + port );
})
