angular.module('crossfit').controller('homeCtrl', function($scope, wodService) {
 console.log("Home CTrl");
 $scope.getWods = function(obj){
   wodService.getAllWods(obj).then(function(res){
     console.log(res);
     if(res.status === 200){
       console.log("User added Successfully!");
     } else {
       console.log("Didnt work :[" );
     }
   })
 }

})
