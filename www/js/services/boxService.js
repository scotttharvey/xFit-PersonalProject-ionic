angular.module('crossfit').service("boxService", function($http){
  this.getAllBoxes = function(){
    return $http.get("http://localhost:4000/api/box")
  },
  this.updateBox = function(box){
    return $http.put("http://localhost:4000/api/box", box).then(function(res){
    return res
    })
  },
  this.addBox = function(box){
    return $http.post("http://localhost:4000/api/box", box).then(function(res){
    return res
    })
  },
  this.deleteBox = function(box){
    return $http.delete("http://localhost:4000/api/box/" + box)
  }

})
