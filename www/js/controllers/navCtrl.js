angular.module('crossfit').controller('navCtrl', function($scope) {
    $scope.goNav = true;
    $scope.togNav = function(){
      $scope.goNav = !$scope.goNav;
      var toggles = document.getElementsByClassName("c-hamburger")[0];
  (toggles.classList.contains("is-active") === true) ? toggles.classList.remove("is-active") : toggles.classList.add("is-active");
    }
})
