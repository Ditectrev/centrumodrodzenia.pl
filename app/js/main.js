// Angular routing.
document.write('<base href="' + document.location + '" />');

var app = angular.module('myApp', ['ngRoute', 'ngMap', 'ngMaterial', 'ngAnimate', 'ngAria'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'glowna.html',
        controller: 'MainController'
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
        controller: 'MainController'
      });

    $locationProvider.html5Mode(true); // Remove hashes from URL.
});

// Contact form.
app.controller('FormController', function($scope, $http) {
  $scope.formData = {};

  console.log('inside form controller');

  $scope.submitForm = function () {
    console.log('sending...');
    // Default values for the request.
    $http({
      method: 'POST',
      url: 'php/contact-form.php',
      data: $scope.formData, // Angular will take care about serializing.
      headers: {'Content-Type': 'application/x-www-form-urlencoded'} // Set the headers so angular passing info as form data (not request payload).
    })
      .then(function successCallback(response) {
        $scope.formData = {}; // Clear input fields in contact form.
        console.log('success while sending, response data: ' + response.data);
      }, function errorCallback(response) {
        console.log('error while sending, response: ' + response);
      });
  }
});

app.controller('MainController', ['$scope', '$location', function($scope, $location) {
  // console.log('inside main controller');

  // Get active route with its location.
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };

  $scope.date = new Date(); // Set current date.

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

  // Smooth scrolling.
  $scope.scrollTo = function (element) {
    $('html, body').animate({
      scrollTop: $(element).offset().top
    }, 1500);
  }
}]);

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