var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var User = require('./userSchema')

var boxSchema = new Schema({
  name: {type: String, required: false},
  email: {type: String, required: false},
  username: {type: String, required: true},
  password: {type: String, required: true},
  number: {type: Number, required: false},
  location: {type: String, required: false},
  // date: {type: Date, default: Date.now},
  about: {type: String, required: false},
  users: [{type: Schema.Types.ObjectId,
      ref: 'User'}]
})
module.exports = mongoose.model("Box", boxSchema)
