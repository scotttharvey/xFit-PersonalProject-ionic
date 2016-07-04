angular.module('crossfit').controller('loginCtrl', function($scope, loginService, $auth, $state) {
  
  $scope.login = function(user){
         $auth.login(user).then(function(res){

             $state.go('wod')


         });
     }

})
