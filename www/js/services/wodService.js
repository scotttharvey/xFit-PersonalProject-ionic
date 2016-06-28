angular.module("crossfit").service('wodService', function($http){
  this.getAllWods = function(user){
    return $http.get("http://192.168.1.106:8100/api/wod", user).then(function(res){
      return res
    })
  },

  this.addWod = function(user){
    return $http.post("http://192.168.1.106:8100/api/wod", user).then(function(res){
    return res
    })
  },
  this.editWod = function(user){
    return $http.put("http://192.168.1.106:8100/api/wod", user).then(function(res){
    return res
    })
  },
  this.deleteWod = function(user){
    return $http.delete("http://192.168.1.106:8100/api/wod", user).then(function(res){
    return res
    })
  }


})
