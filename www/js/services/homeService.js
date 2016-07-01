angular.module("crossfit").service('homeService', function($http){
  this.getAllUsers = function(){
    return $http.get("http://localhost:3000/api/user")
  },

  this.addUser = function(user){
    return $http.post("http://localhost:3000/api/user", user).then(function(res){
    return res
    })
  },
  this.deleteUser = function(user){
    return $http.delete("http://localhost:3000/api/user/" + user)
  }

})
