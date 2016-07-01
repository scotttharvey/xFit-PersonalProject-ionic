angular.module('crossfit').controller('wodCtrl', function($scope, wodService, $ionicModal, $ionicPopup) {

  $scope.toggleFooter = false;


  $scope.getAllWods = function() {
    wodService.getAllWods().then(function(res) {
      $scope.allWods = res.data;
    })
  }
  $scope.getAllWods();

  $scope.addWod = function(wod) {
    wodService.addWod(wod);
    $scope.getAllWods();


  };
  $scope.updateWod = function(wod) {
    wodService.editWod(wod);
    $scope.getAllWods();

  };
  $scope.removeWod = function(wod) {

    wodService.deleteWod(wod);
    $scope.getAllWods();

  }

  $scope.showFooter = function() {
    $scope.toggleFooter = !$scope.toggleFooter
  }
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;

  $ionicModal.fromTemplateUrl('./views/editModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(wod) {
    $scope.wod = wod;
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Wod Edited',
      template: 'Wod Edited Successfully'
    })
  };
})
