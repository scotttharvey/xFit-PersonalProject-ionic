angular.module('crossfit').controller('navCtrl', function($scope) {
$scope.yes = true;
$scope.showAll = function(){
  console.log("was clicked");
  $scope.yes = $scope.yes === false;
}


})
