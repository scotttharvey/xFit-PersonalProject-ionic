angular.module("crossfit").service('userService', function($http){

  this.getAllUsers = function(){
    return $http.get("http://localhost:3000/api/user")
  },

  this.addUser = function(user){
    return $http.post("http://localhost:3000/api/user", user).then(function(res){
    return res
    })
  },
  this.editUser = function(user){
    return $http.put("http://localhost:3000/api/user/" + user._id, user)

  },
  this.deleteUser = function(user){
    return $http.delete("http://localhost:3000/api/user/" + user)
  }

})
