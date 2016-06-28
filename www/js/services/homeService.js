angular.module("crossfit").service('homeService', function($http){
  this.getAllUsers = function(user){
    return $http.get("http://192.168.1.106:8100/api/user", user).then(function(res){
      return res
    })
  },

  this.addUser = function(user){
    return $http.post("http://192.168.1.106:8100/api/user", user).then(function(res){
    return res
    })
  }
})
