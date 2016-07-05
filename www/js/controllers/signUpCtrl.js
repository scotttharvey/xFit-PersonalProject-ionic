angular.module('crossfit').controller('signUpCtrl', function($scope, loginService, $auth, $state, $ionicPopup) {
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
  $scope.signUp = function(user) {
          console.log($auth)
        $auth.signup(user).then(function(response) {
            console.log("hi")
             $auth.setToken(response.data.token);
         console.log("signed up")
         $state.go('wod')

       });
    }
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Signed Up',
        template: 'You are now signed up, {{newUser.name}}!'
      })
    };
})
