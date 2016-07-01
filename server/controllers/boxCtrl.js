var Box = require("../models/boxSchema")

module.exports = {
  addBox: function(req, res, next){
    var box = new Box(req.body);
    box.save(function (err, ans){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(ans)
      }
    })
  },
  getAllBoxes: function(req, res, next){
    console.log("Im getting hit");
    Box.find({}, function(err, ans){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(ans)
      }
    })
  },
  updateBox: function(req, res, next){
    Box.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(response)
      }
    })
  },
  deleteBox: function(req, res, next){
    var id = req.params.id;
    Box.findByIdAndRemove(id, function(err, ans){
      if(err){
        res.status(500).json(err);
      } else{
        res.status(200).json(ans)
      }
    })
  }
}
