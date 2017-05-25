(function ($) {
  "use strict";

  // Display current year.
  $('.year').html(new Date().getFullYear());
})(jQuery);


// Angular routing.
document.write('<base href="' + document.location + '" />');

var app = angular.module('myApp', ['ngRoute', 'ngMap'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'glowna.html',
        controller: 'HomeController'
      })
      .when('/uslugi', {
        templateUrl: 'uslugi.html',
        controller: 'ServicesController'
      })
      .when('/o-nas', {
        templateUrl: 'o-nas.html',
        controller: 'AboutController'
      })
      .when('/cennik', {
        templateUrl: 'cennik.html',
        controller: 'PricingController'
      })
      .when('/kontakt', {
        templateUrl: 'kontakt.html',
        controller: 'ContactController'
      })
      .otherwise({
        redirectTo: '/',
        controller: 'HomeController'
      });

    $locationProvider.html5Mode(true); // Remove hashes from URL.
});

app.controller('HeaderController',
['$scope', '$location', function($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };

  // Load appropriate page according to clicked menu item.
  $scope.loadHome = function () {
    $location.url('/');
  };
  $scope.loadServices = function () {
    $location.url('/uslugi');
  };
  $scope.loadAbout = function () {
    $location.url('/o-nas');
  };
  $scope.loadPricing = function () {
    $location.url('/cennik');
  };
  $scope.loadContact = function () {
    $location.url('/kontakt');
  };
}]);

app.controller('HomeController', function ($scope, $compile) {
  // console.log('inside home controller');
});
app.controller('ServicesController', function ($scope, $compile) {
  // console.log('inside services controller');
});
app.controller('AboutController', function ($scope, $compile) {
  // console.log('inside about controller');
});
app.controller('PricingController', function ($scope, $compile) {
  // console.log('inside pricing controller');
});
app.controller('ContactController', function ($scope, $compile, NgMap) {
  // console.log('inside contact controller');
  NgMap.getMap().then(function (map) {
    $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgak4bu3Ppg2MGxaoi56ymcUrfiWQXM3A";
  });
});