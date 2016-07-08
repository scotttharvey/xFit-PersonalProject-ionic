angular.module('crossfit').controller('userCtrl', function($scope, $state, homeService, settingsService, userService, wodService, $ionicModal, $ionicPopup) {
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

    $scope.goFriend = function(i){
      userService.friendProfile = $scope.Users[i];
      $state.go('friend')
    }
    $scope.updatePR = function(obj){
      userService.editUser(obj);
    }


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
