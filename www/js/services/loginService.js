angular.module("crossfit").service('loginService', function($http){
  this.getAllUsers = function(user){
    return $http.get("http://localhost:3000/api/user", user).then(function(res){
      return res
    })
  },

  this.addUser = function(user){
    return $http.post("http://localhost:3000/api/user", user).then(function(res){
    return res
    })
  },
  this.updateUser = function(user){
    return $http.put("http://localhost:3000/api/user", user).then(function(res){
    return res
    })
  },
  this.deleteUser = function(user){
    return $http.delete("http://localhost:3000/api/user", user).then(function(res){
    return res
    })
  }
})
