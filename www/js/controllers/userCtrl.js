angular.module('crossfit').controller('userCtrl', function($scope, settingsService, userService, $ionicModal, $ionicPopup) {
    $scope.addNewUser = function(userObj){
      userService.addUser(userObj).then(function(res){
        console.log(res);
        if(res.status === 200){
          console.log("User added Successfully");
        } else {
          console.log("Didnt work :[" );
        }
      })
    },
    $scope.getUsers = function(userObj){
      userService.getAllUsers(userObj).then(function(res){
        if(res.status === 200){
          console.log(res);
        } else {
          console.log("Didnt work  ");
        }
      })
    },

    settingsService.getCurrentUser().then(function(res){
      $scope.currentUser = res.data
      $scope.admin = res.data.admin
      console.log($scope.currentUser);
    })

})
