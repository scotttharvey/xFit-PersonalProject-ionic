angular.module('crossfit').controller('settingsCtrl', function($scope, settingsService, $ionicModal, $ionicPopup, $auth, $state) {

$scope.logOut = function(){
  $auth.logout().then(function(res){
    $state.go('login')

  })
}
  settingsService.getCurrentUser().then(function(res){
    console.log(res.data.admin);

    $scope.currentUser = res.data
    $scope.admin = res.data.admin
    console.log($scope.currentUser);
  })
})
