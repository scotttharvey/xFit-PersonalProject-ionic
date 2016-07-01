angular.module('crossfit').controller('addWodCtrl', function($scope, wodService, $ionicPopup, $timeout, $state) {

  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Wod Added',
      template: 'Wod Added Successfully'
    })
  };

  $scope.addWod = function(wod){
    wodService.addWod(wod).then(function(res){
      $scope.getWods = res;
      console.log(res);
      if(res.status === 200){
        console.log("Wod added Successfully");
      } else {
        console.log("Didnt work" );
      }
    })
  };


})
