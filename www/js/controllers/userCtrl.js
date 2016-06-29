angular.module('crossfit').controller('userCtrl', function($scope, userService) {
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
    }

})
