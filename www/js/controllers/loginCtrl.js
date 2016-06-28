angular.module('crossfit').controller('loginCtrl', function($scope, loginService) {
  $scope.addNewUser = function(userObj){
    loginService.addUser(userObj).then(function(res){
      console.log(res);
      if(res.status === 200){
        console.log("User added Successfully!");
        
      } else {
        console.log("Didnt work :[" );
      }
    })
  }


})
