var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {type: String, required: false},
  email: {type: String, required: false},
  username: {type: String, required: true},
  password: {type: String, required: true},
  number: {type: Number, required: false},
  date: {type: Date, default: Date.now},
  about: {type: String, required: false}
})
module.exports = mongoose.model("User", userSchema)
