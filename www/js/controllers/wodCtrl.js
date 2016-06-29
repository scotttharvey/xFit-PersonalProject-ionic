angular.module('crossfit').controller('wodCtrl', function($scope, wods, wodService) {
 console.log("Wod CTrl");
 console.log(wods);
$scope.getWods = wods;

$scope.addWod = function(wod){
  wodService.addWod(wod).then(function(res){
    console.log(res);
    if(res.status === 200){
      console.log("Wod added Successfully");
    } else {
      console.log("Didnt work :[" );
    }
  })
};

})
