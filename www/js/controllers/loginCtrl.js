angular.module('crossfit').controller('loginCtrl', function($scope, loginService, $auth, $state) {
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

  $scope.login = function(user){
         $auth.login(user).then(function(res){

             $state.go('wod')


         });
     }

})
