angular.module('crossfit').controller('navCtrl', function($scope) {
    $scope.goNav = true
    $scope.togNav = function(){
      $scope.goNav = !$scope.goNav;
    }
    $scope.nav =  function() {
      
    }

})
