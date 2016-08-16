angular.module("crossfit").service('loginService', function($http){
  this.userSignUp = function(){
   return $http({
       method:"POST",
       url:"api/login"
   }).then(function(response){
       return response
   })
},
this.userLogin = function(user){
  return $http.post("http://localhost:4000/api/signup", user).then(function(res){
  return res
  })
},
  this.getAllUsers = function(user){
    return $http.get("http://localhost:4000/api/login", user).then(function(res){
      return res
    })
  },


  this.updateUser = function(user){
    return $http.put("http://localhost:4000/api/login", user).then(function(res){
    return res
    })
  },
  this.deleteUser = function(user){
    return $http.delete("http://localhost:4000/api/user", user).then(function(res){
    return res
    })
  }
})
