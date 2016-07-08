angular.module('crossfit').controller('userCtrl', function($scope, homeService, settingsService, userService, wodService, $ionicModal, $ionicPopup) {
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
    $scope.showUsers = function() {
      homeService.getAllUsers().then(function(res) {
        $scope.Users = res.data;
      })
    }
    $scope.showUsers();

    settingsService.getCurrentUser().then(function(res){
      $scope.currentUser = res.data
      $scope.admin = res.data.admin
      console.log($scope.currentUser);
    })
    $scope.pr = true;
    $scope.togPR = function(){
      $scope.pr = !$scope.pr;
    }
    $scope.aboutTab = true;
    $scope.togAbout = function(){
      $scope.aboutTab = !$scope.aboutTab;
    }
    $scope.followers = true;
    $scope.togFollowers = function(){
      $scope.followers = !$scope.followers;
    }
})
