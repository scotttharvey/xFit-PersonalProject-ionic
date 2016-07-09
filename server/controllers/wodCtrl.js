var Wod = require("../models/wod.js")

module.exports = {
  getAllWods: function(req, res, next){
  Wod.find({}, function(err, ans){
    if(err){
      res.status(500).json(err);
    } else{
      res.status(200).json(ans)
    }
  })
},
  addWod: function(req, res, next){
    var wod = new Wod(req.body);
      wod.save(function(err, ans){
        if(err){
          res.status(500).json(err)
        } else{
          res.status(200).json(ans)
        }
      })
  },
  editWod: function(req, res, next){
    Wod.findByIdAndUpdate(req.params.id, req.body, function(err, ans){
      if(err){
        res.status(500).json(err)
      } else{
        res.status(200).json(ans)
      }
    })
  },
  deleteWod: function(req, res, next){
    var id = req.params.id;
    Wod.findByIdAndRemove(id, function(err, ans){
      if(err){
        res.status(500).json(err)
      } else{
        res.status(200).json(ans)
      }
    })
  },
  addComment: function(req, res, next) {
     Wod.findById(req.body.postId, function(err, post){
       if (err) {
         res.status(500).json(err);
       }else {
         post.comments.push({user: req.body.userId, comment: req.body.newComment});
         post.save(function(err, data) {
           if (err){
             res.status(500).send(err);
           }else {
             res.status(200).json(data);
           }
         })
       }
     })
   },
   deleteComment: function(req, res, next) {
         var id = req.params.id;
         var status = req.params.status
         Wod.findByIdAndUpdate(status, {$pull: {comments: {_id: id}}}, function(err, response) {
          err ? res.status(500).send(err) : res.status(200).send(response)
      })
     },
  addLike: function(req, res, next) {
     Wod.findById(req.body.postId, function(err, post){
       if (err) {
         res.status(500).json(err);
       }else {
         post.likes.push({user: req.body.userId, like: req.body.newLike});
         post.save(function(err, data) {
           if (err){
             res.status(500).send(err);
           }else {
             res.status(200).json(data);
           }
         })
       }
     })
   }
}
