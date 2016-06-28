angular.module('crossfit').controller('homeCtrl', function($scope, userService) {
 console.log("Home CTrl");
 $scope.getUsers = (function(obj){
   userService.getAllUsers(obj).then(function(res){
     console.log(res);
     $scope.users = res.data;
     if(res.status === 200){
       console.log("User Found!");
     } else {
       console.log("Didnt work :[" );
     }
   })
 })()

})
