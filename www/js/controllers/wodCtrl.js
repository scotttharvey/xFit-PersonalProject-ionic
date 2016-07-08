angular.module('crossfit').controller('wodCtrl', function($scope, settingsService, wodService, $ionicModal, $ionicPopup) {

  $scope.toggleFooter = false;

  settingsService.getCurrentUser().then(function(res) {
    $scope.currentUser = res.data
    $scope.admin = res.data.admin
    console.log($scope.currentUser);
  })

  $scope.getAllWods = function() {
    wodService.getAllWods().then(function(res) {
      console.log(res.data);
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
  $scope.addCurrentWod = function(userId, postId, newComment, showIndex) {
    wodService.addCurrentWod(userId, postId, newComment).then(function(res) {
      wodService.getAllWods()

    })
  }
  $scope.postComment = function(userId, postId, newComment, username, showIndex) {
    wodService.postComment(userId, postId, newComment, username).then(function(res){
        $scope.wod.comments = res.data.comments;
            $scope.getAllWods();
    })

  }
  $scope.postLike = function(userId, postId, newLike, showIndex) {
    wodService.addLike(userId, postId, newLike).then(function(res) {
      console.log(res);
      $scope.wod.likes = res.data.likes


    })
  }

  $scope.deleteComment = function(id) {
    wodService.deleteComment(id);
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

  $ionicModal.fromTemplateUrl('./views/wodModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalShow = modal;
  });
  $scope.openWodModal = function(wod) {
    $scope.wod = wod;
    $scope.modalShow.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();

  };
  $scope.closeWodModal = function() {
    $scope.modalShow.hide();

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
  $scope.removeAlert = function(obj) {
    var alertPopup = $ionicPopup.alert({
      title: 'Wod Removed',
      template: obj + ' Removed Successfully'
    })
  };
})
