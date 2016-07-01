angular.module('crossfit').controller('homeCtrl', function($scope, userService, homeService, $ionicPopup) {
 console.log("Home CTrl");

 $scope.getAllUsers = function() {
   homeService.getAllUsers().then(function(res) {
     $scope.allUsers = res.data;
   })
 }
 $scope.getAllUsers();


  $scope.removeUser = function(user) {

    homeService.deleteUser(user);
    $scope.getAllUsers();
  }
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'User Removed',
      template: 'User Removed Successfully'
    })
  };
 $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true;
})

//
// $scope.getUsers = (function(obj){
//  userService.getAllUsers(obj).then(function(res){
//    console.log(res.data);
//    $scope.users = res.data;
//    if(res.status === 200){
//      console.log("User Found!");
//    } else {
//      console.log("Didnt work :[" );
//    }
//  })
// })()
