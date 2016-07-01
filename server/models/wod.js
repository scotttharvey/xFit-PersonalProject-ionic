var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var wodSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  warmup: {type: String, required: false},
  comments: {type: String},
  rx: {type: String},
  date: {type: Date, default: Date.now}
})
module.exports = mongoose.model("Wod", wodSchema)
