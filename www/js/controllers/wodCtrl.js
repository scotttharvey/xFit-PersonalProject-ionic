angular.module('crossfit').controller('wodCtrl', function($scope, wods, wodService) {
 console.log("Wod CTrl");
 console.log(wods);
$scope.toggleFooter = false;
$scope.getWods = wods;

$scope.addWod = function(wod){
  wodService.addWod(wod).then(function(res){
    $scope.getWods = res;
    if(res.status === 200){
      console.log("Wod added Successfully");
    } else {
      console.log("Didnt work :[" );
    }
  })
};
$scope.editWod = function(wod){
  wodService.updateWod(wod).then(function(res){
    $scope.getWods = res;
    if(res.status === 200){
      console.log("Wod added Successfully");
    } else {
      console.log("Didnt work :[" );
    }
  })
};
$scope.removeWod = function(wod){
  wodService.deleteWod(wod).then(function(res){
    $scope.byeWod = res._id;
    if(res.status === 200){
      console.log("Wod removed Successfully");
    } else {
      console.log("Didnt work :[" );
    }
  })
}
$scope.showFooter = function(){
  $scope.toggleFooter = !$scope.toggleFooter
  console.log($scope.toggleFooter);
}
$scope.shouldShowDelete = false;
$scope.shouldShowReorder = false;
$scope.listCanSwipe = true

})
