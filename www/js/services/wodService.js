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
    return $http.put("http://localhost:3000/api/wod/" + wod).then(function(res){
    return res
    })
  },
  this.deleteWod = function(wod){
    return $http.delete("http://localhost:3000/api/wod/" + wod)
  }


})
