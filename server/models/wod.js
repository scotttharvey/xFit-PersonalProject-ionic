var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var wodSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  warmup: {type: String, required: false},
  rx: {type: String},
  prs:[{
    backsquat: String,
    frontsquat: String,
    cleanandjerk: String,
    snatch: String,
    pullups: String,
    doubleunders: String,
    splitjerk: String,
    shoulderpress: String,
    overheadsquat: String,
    handstandpushups: String,
    row: String,
    powerclean: String,
    powersnatch: String
  }],
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
