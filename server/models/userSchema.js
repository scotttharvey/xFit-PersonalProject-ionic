var mongoose = require("mongoose")
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs')

var userSchema = new Schema({
  name: {type: String, required: false},
  email: {type: String, required: false},
  username: {type: String, required: true},
  password: {type: String, required: true},
  number: {type: Number, required: false},
  // date: {type: Date, default: Date.now},
  about: {type: String, required: false},
  prs:[{
    backsquat: Number,
    frontsquat: Number,
    cleanandjerk: Number,
    snatch: Number,
    pullups: Number,
    doubleunders: Number,
    splitjerk: Number,
    shoulderpress: Number,
    overheadsquat: Number,
    handstandpushups: Number,
    row: Number,
    powerclean: Number,
    powersnatch: Number
  }],
  followers: [],
  admin: {type: Boolean, default: false, required: true},
  wods:[{time:String,
  wod:{type: mongoose.Schema.Types.ObjectId, ref: 'Wod'}
  }]
})

userSchema.pre('save', function(next) {
 var user = this;
 if (!user.isModified('password')) {
   return next();
 }
 bcrypt.genSalt(10, function(err, salt) {
   bcrypt.hash(user.password, salt, function(err, hash) {
     user.password = hash;
     next();
   });
 });
});

userSchema.methods.comparePassword = function(password, done) {
 bcrypt.compare(password, this.password, function(err, isMatch) {

   done(err, isMatch);
 });
};




module.exports = mongoose.model("User", userSchema)
