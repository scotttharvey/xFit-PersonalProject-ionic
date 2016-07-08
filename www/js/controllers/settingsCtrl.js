angular.module('crossfit').controller('settingsCtrl', function($scope, settingsService, userService, $ionicModal, $ionicPopup, $auth, $state) {

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
  $scope.updateUser = function(obj){
    console.log(obj);
    userService.editUser(obj);
    $state.go("user")
  }

  $scope.showEdit = function(){
    $scope.editMe = !$scope.editMe
  }
  $scope.editMe = true;

  $scope.userAlert = function() {
  var alertPopup = $ionicPopup.alert({
    title: 'Profile Edited',
    template: 'Profile Edited Successfully'
  })
};
})
