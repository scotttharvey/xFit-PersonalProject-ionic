var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var wodSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  warmup: {type: String, required: false},
  comments: {type: String},
  rx: {type: String},
  date: {type: Date, default: Date.now},
  tips: {type: String},
  comments: [{
    comment: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}]
}, {timestamps: true})

wodSchema.pre('find', function(next) {
  this.populate('user comments.user');
  next();
})
module.exports = mongoose.model("Wod", wodSchema)
