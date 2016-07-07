var express = require("express");
var session =require("express-session");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();


var userCtrl = require("./server/controllers/userCtrl")
var wodCtrl = require("./server/controllers/wodCtrl")
var boxCtrl = require("./server/controllers/boxCtrl")

var User = require("./server/models/userSchema.js")
var Wod = require("./server/models/wod.js")
var Box = require("./server/models/boxSchema.js")
var corsOptions = {
  origin: "http://localhost:8100"
}
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.get("/api/user", userCtrl.getAllUsers)
app.post("/api/user", userCtrl.addUser)
app.put("/api/user/:id", userCtrl.updateUser)
app.delete("/api/user/:id", userCtrl.deleteUser)

app.post('/auth/login', userCtrl.userLogin);
app.post('/auth/signup', userCtrl.userSignUp);

app.get("/api/me", userCtrl.ensureAuthenticated, userCtrl.getCurrentUser)
app.post('/api/metconWod/', userCtrl.addExistingWod);

app.get("/api/wod", wodCtrl.getAllWods)
app.post("/api/wod", wodCtrl.addWod)
app.put("/api/wod/:id", wodCtrl.editWod)
app.delete("/api/wod/:id", wodCtrl.deleteWod)
app.post('/api/wod/comment/', wodCtrl.addComment);
app.post('/api/wod/like/', wodCtrl.addLike);
app.delete('/api/wod/comment/:id  ', wodCtrl.deleteComment);
// app.delete('/api/wod/comment/:id/:status', wodCtrl.deleteComment);


app.get("/api/box", boxCtrl.getAllBoxes)
app.post("/api/box", boxCtrl.addBox)
app.put("/api/box/:id", boxCtrl.updateBox)
app.delete("/api/box/:id", boxCtrl.deleteBox)



mongoose.set('debug', true)
mongoose.connect("mongodb://localhost/xFit")



var port = 3000;
app.listen(port, function(){
  console.log("Listening to " + port );
})
