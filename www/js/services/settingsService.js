angular.module('crossfit').service('settingsService', function($http){
  this.getCurrentUser = function(){
    return $http.get("http://localhost:4000/api/me").then(function(res){
      return res
    })
  }
})
