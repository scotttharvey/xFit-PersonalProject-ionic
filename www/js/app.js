// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('crossfit', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

  })
  .config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "../views/mainTmpl.html",
        controller: "mainCtrl"
      })
      .state('login', {
        url: "/login",
        templateUrl: "../views/loginTmpl.html",
        controller: "loginCtrl"
      })
      .state('user', {
        url: "/user",
        templateUrl: "../views/userTmpl.html",
        controller: "userCtrl"
      })
      .state('home', {
        url: "/home",
        templateUrl: "../views/homeTmpl.html",
        controller: "homeCtrl"
      })
      .state('wod', {
        url: "/wod",
        templateUrl: "../views/wodTmpl.html",
        controller: "wodCtrl",
        resolve: {
          wods: function(wodService) {
            return wodService.getAllWods().then(function(res) {
              return res.data;
            })
          }
        }
      })
  })
