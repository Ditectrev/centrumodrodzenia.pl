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

// Main page.
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

// Services.
app.controller('ServicesController', function ($scope, $compile) {
  // console.log('inside services controller');

  $scope.data = [{
    title: 'Diagnostyka i terapia narządów',
    description: 'Opis usługi',
    image: './images/course01.jpg'
  }, {
    title: 'Diagnostyka i likwidacja boreliozy',
    description: 'Opis usługi',
    image: './images/course02.jpg'
  }, {
    title: 'Diagnostyka i likwidacja bakterii i wirusów',
    description: 'Opis usługi',
    image: './images/course03.jpg'
  }, {
    title: 'Diagnostyka i likwidacja pasożytów',
    description: 'Opis usługi',
    image: './images/course04.jpg'
  }, {
    title: 'Terapia stanów psychologicznych',
    description: 'Opis usługi',
    image: './images/course05.jpg'
  }, {
    title: 'Diagnostyka i likwidacja alergii',
    description: 'Opis usługi',
    image: './images/course06.jpg'
  }, {
    title: 'Terapia Uzależnień',
    description: 'Opis usługi',
    image: './images/course07.jpg'
  }, {
    title: 'Detoksykacja organizmu',
    description: 'Opis usługi',
    image: './images/course08.jpg'
  }, {
    title: 'Dobranie rodzajów oraz indywidualnych dawek leków i suplementów',
    description: 'Opis usługi',
    image: './images/course01.jpg'
  }]
});

// About us.
app.controller('AboutController', function ($scope, $compile) {
  // console.log('inside about controller');

  $scope.data = [{
    name: 'Mateusz',
    title: 'Szef',
    description: 'Terapeuta w wieloletnim doświadczeniem, inżynier w dziedzinie technologii chemicznej',
    image: './images/mentor.jpg'
  }, {
    name: 'Mateusz',
    title: 'Szef',
    description: 'Terapeuta w wieloletnim doświadczeniem, inżynier w dziedzinie technologii chemicznej',
    image: './images/mentor.jpg'
  }]
});

// Pricing.
app.controller('PricingController', function ($scope) {
  // console.log('inside pricing controller');

  $scope.data = [{
    title: 'Diagnoza kontrolna Sensitive Imago 530',
    description: '0 zł'
  }, {
    title: 'Diagnoza ogólna Sensitive Imago 530',
    description: '250 zł'
  }, {
    title: 'Diagnoza szczegółowa Sensitive Imago 530',
    description: '350 zł'
  }, {
    title: 'Terapia BICOM (jednorazowa)',
    description: '70 zł'
  }, {
    title: 'Terapia uzależnień (jednorazowa)',
    description: '100 zł'
  }, {
    title: 'Pełna terapia uzależnień (karnet)',
    description: '320 zł'
  }, {
    title: 'Badanie z użyciem aparatu specjalistycznego BICOM Chi (jednorazowa)',
    description: '30 zł'
  }, {
    title: 'Tworzenie indywidualnych leków informacyjnych (Spektronosod)',
    description: '40 zł'
  }, {
    title: 'Dobranie rodzaju oraz dawki leku za pośrednictwem Sensitive Imago 530',
    description: '40 zł'
  }]
});

// Contact.
app.controller('ContactController', function ($scope, $compile, NgMap) {
  // console.log('inside contact controller');
  NgMap.getMap().then(function (map) {
    $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgak4bu3Ppg2MGxaoi56ymcUrfiWQXM3A";
  });
});

// Contact form.
app.controller('FormController', function($scope, $http) {
  $scope.formData = {};

  // console.log('inside form controller');

  $scope.submitForm = function () {
    // console.log('sending...');
    // Default values for the request.
    $http({
      method: 'POST',
      url: 'php/contact-form.php',
      data: $scope.formData, // Angular will take care about serializing.
      headers: {'Content-Type': 'application/x-www-form-urlencoded'} // Set the headers so angular passing info as form data (not request payload).
    })
      .then(function successCallback(response) {
        $scope.formData = {}; // Clear input fields in contact form.
        // console.log('success while sending, response data: ' + response.data);
      }, function errorCallback(response) {
        // console.log('error while sending, response: ' + response);
      });
  }
});