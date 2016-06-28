angular.module("crossfit").service('wodService', function($http){
  this.getAllWods = function(user){
    return $http.get("http://localhost:3000/api/wod", user).then(function(res){
      return res
    })
  },

  this.addWod = function(user){
    return $http.post("http://localhost:3000/api/wod", user).then(function(res){
    return res
    })
  },
  this.editWod = function(user){
    return $http.put("http://localhost:3000/api/wod", user).then(function(res){
    return res
    })
  },
  this.deleteWod = function(user){
    return $http.delete("http://localhost:3000/api/wod", user).then(function(res){
    return res
    })
  }


})
