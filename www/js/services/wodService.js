angular.module("crossfit").service('wodService', function($http){
  this.getAllWods = function(){
    return $http.get("http://localhost:3000/api/wod")
  },

  this.addWod = function(wod){
    return $http.post("http://localhost:3000/api/wod", wod).then(function(res){
    return res
    })
  },
  this.editWod = function(wod){
    return $http.put("http://localhost:3000/api/wod/" + wod._id, wod)

  },
  this.deleteWod = function(wod){
    return $http.delete("http://localhost:3000/api/wod/" + wod)
  },
  this.postComment = function (userId, postId, newComment) {
 return $http({
   method: "POST",
   url: "/api/wod/comment/",
   data: {
     postId: postId,
     userId: userId,
     newComment: newComment
   }
 })
},
this.deleteComment = function(id, daily) {
      return $http({
          method: 'DELETE',
          url: 'api/wod/' + id +'/'+ daily
      })
    },
this.addCurrentWod = function (userId, postId, theWod) {
    return $http({
            method: "POST",
                url:'/api/metconWod/',
                    data: {
                      postId: postId,
                      userId: userId,
                      addWod: theWod
                    }
                })
            }

})
