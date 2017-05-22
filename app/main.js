(function ($) {
  // Display current year.
  $('.year').html(new Date().getFullYear());

  // Google Maps.
  $('.gmaps-btn').click(function () {
    $('#map-btn1').toggleClass('btn-show', 'btn-hide', 1000);
    $('#map-btn1').toggleClass('btn-hide', 'btn-show', 1000);
    $('#map-btn2').toggleClass('btn-show', 'btn-hide', 1000);
    $('#map-btn2').toggleClass('btn-hide', 'btn-show', 1000);
    $('#map-btn2').toggleClass('close-maps', 'open-maps', 1000);
    $('#map-btn2').toggleClass('open-maps', 'close-maps', 1000);
    $('#maps').toggleClass('close-maps', 'open-maps', 1000);
    $('#maps').toggleClass('open-maps', 'close-maps', 1000);

    return false;
  });
})(jQuery);

// Initialize Google Maps.
function initMap() {
  var myLatLng = {lat: 50.20007, lng: 17.8234893};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('google-maps'), {
    zoom: 15,
    center: myLatLng
  });
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

// Angular routing.
document.write('<base href="' + document.location + '" />');

var app = angular.module('myApp', ['ngRoute'])
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
app.controller('ContactController', function ($scope, $compile) {
  // console.log('inside contact controller');
});