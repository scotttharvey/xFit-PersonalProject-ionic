angular.module('crossfit').controller('friendCtrl', function($scope, userService, homeService, settingsService) {
  $scope.getUsers = function(userObj){
    userService.getAllUsers(userObj).then(function(res){
      if(res.status === 200){
        console.log(res);
      } else {
        console.log("Didnt work  ");
      }
    })
  },
  $scope.friend = userService.friendProfile;
  $scope.myFriend = function(user){
    userService.getUser(user);
    console.log(user);
  }
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
  $scope.about = function(){
    $scope.prHidden = true;
    $scope.aboutTab = false;
    $scope.followers = true;
  }
  $scope.pr = function(){
    $scope.prHidden = false;
    $scope.aboutTab = true;
    $scope.followers = true;
  }
  $scope.following = function(){
    $scope.prHidden = true;
    $scope.aboutTab = true;
    $scope.followers = false;
  }
    $scope.prHidden = false;
    $scope.aboutTab = true;
    $scope.followers = true;


})
