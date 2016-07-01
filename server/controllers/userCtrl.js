var User = require("../models/userSchema")

module.exports = {
  addUser: function(req, res, next){
    var user = new User(req.body);
    user.save(function (err, ans){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(ans)
      }
    })
  },
  getAllUsers: function(req, res, next){
    console.log("Im getting hit");
    User.find({}, function(err, ans){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(ans)
      }
    })
  },
  updateUser: function(req, res, next){
    User.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response)
      }
    })
  },
  deleteUser: function(req, res, next){
    var id = req.params.id;
    User.findByIdAndRemove(id, function(err, ans){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(ans)
      }
    })
  }
}
