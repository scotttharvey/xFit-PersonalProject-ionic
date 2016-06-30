angular.module('crossfit').controller('addWodCtrl', function($scope, wods, wodService) {
  $scope.getWods = wods;

  $scope.addWod = function(wod){
    wodService.addWod(wod).then(function(res){
      $scope.getWods = res;
      if(res.status === 200){
        console.log("Wod added Successfully");
      } else {
        console.log("Didnt work :[" );
      }
    })
  };


})
