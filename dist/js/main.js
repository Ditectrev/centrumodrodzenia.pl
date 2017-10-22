// Angular routing.
document.write('<base href="' + document.location + '" />');

var app = angular.module('myApp', ['ngRoute', 'ngMap', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngSanitize'])
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
    description: 'Podczas kuracji narządy są stymulowane do usuwania toksyn oraz dostrajają się do częstotliwości organów pracujących prawidłowo. Jest to bezpieczna, szybka i skuteczna metoda w leczeniu wielu schorzeń.',
    image: './images/narzady.jpg'
  }, {
    description: '<b>Najczęstsze objawy</b>:  zmęczenie, zaburzenia koncentracji i pamięci, otępienie, drętwienie kończyn, zaburzenia rytmu serca, słaba wydolność fizyczna, bóle stawów, sztywność karku, depresja, silne bóle głowy i inne.',
    image: './images/borelioza.jpg'
  }, {
    description: 'Dokładna diagnostyka konkretnego rodzaju bakterii lub wirusa zapewnia szybką, skuteczną i bezpieczną terapię bez konieczności stosowania substancji syntetycznych bardzo często wywołujących liczne skutki uboczne.',
    image: './images/bakterie.jpg'
  }, {
    description: '<b>Najczęstsze objawy</b>: pokasływanie, okresowe napady suchego kaszlu, chrząkanie, nadmierny apetyt bez przyrostu wagi, osłabienie, anemia, podkrążone oczy, bóle brzucha, zaparcia lub biegunki, problemy skórne (np. wysypka) i inne.',
    image: './images/pasozyty.jpg'
  }, {
    description: '<b>Najczęstsze objawy</b>: zmęczenie, suchość w ustach, uczucie zatkanego nosa, nawracające, trudno gojące się problemy skórne (świąd, łuszczenie), alergie, śluzowate stolce, wzdęcia, nieokreślone bóle brzucha i inne.',
    image: './images/grzyby.jpg'
  }, {
    description: 'Biorezonans wykazuje bardzo dużą skuteczność w leczeniu bezsenności – efekty są odczuwane już w dniu terapii. Terapia obejmować może także poprawę samopoczucia, eliminację lęków, stresu i wiele innych.',
    image: './images/psychologia.jpg'
  }, {
    description: '<b>Najczęstsze objawy alergii</b>: katar, częste kichanie, kaszel, swędzenie, pieczenie i przekrwienie oczu, osłabienie, drażliwość. Ze strony układu pokarmowego: problemy skórne, biegunka i utrata masy ciała.',
    image: './images/alergia.jpg'
  }, {
    description: 'Terapia ma na celu zmniejszenie chęci ulegania nałogowi. Jednocześnie wspomaga odtruwanie organizmu ze szkodliwych złogów nagromadzonych na skutek używania papierosów/narkotyków itp. – zmysły i neuroprzekaźniki zaczynają działać właściwie.',
    image: './images/uzaleznienia.jpg'
  }, {
    description: '<b>Najczęstsze objawy obciążenia organizmu toksynami</b>: ciągłe zmęczenie, osłabienie koncentracji i pamięci, choroby przewlekłe (np. choroby  tarczycy). W następstwie także choroby nowotworowe.',
    image: './images/detoks.jpg'
  }]
});

// About us.
app.controller('AboutController', function ($scope, $compile) {
  // console.log('inside about controller');

  $scope.data = [{
    name: 'Klaudia Buczek',
    title: 'Założycielka',
    description: 'Z wykształcenia mgr chemii medycznej. Konsultantka totalnej biologii, radiesteta–terapeutka oraz refleksoterapeutka. Obecnie także studentka ostatniego semestru naturoterapii we Wrocławskim Studium Edukacji Ekologicznej, co da jej zawód naturopaty. Pasjonatka i studentka medycyny chińskiej oraz opartej na niej dietetyki pięciu przemian. Certyfikowana operatorka biorezonansu Sensitiv Imago 530. Ukończyła także szkolenie z obsługi urządzenia BICOM. Odbyła kurs metody samokontroli umysłu metodą Silvy. Dzięki specjalistycznym kursom naturoterapii zdobyła umiejętności  wykonywania masażu bańką chińską, masażu energetycznego polarity, świecowania uszu. W swojej pracy kieruje się poszukiwaniem prawdziwej przyczyny problemu co zapewnia skuteczność oraz precyzję w działaniu.',
    image: './images/klaudia.jpg'
  }, {
    name: 'Mateusz Pruszowski',
    title: 'Założyciel',
    description: 'Wyższe wykształcenie zdobył na Politechnice Wrocławskiej na studiach o specjalności Inżynieria Chemiczna i Procesowa. Obecnie kończy studia we Wrocławskim Studium Edukacji Ekologicznej dające zawód naturopaty, bioenergoterapeuty oraz radiestety. Konsultant totalnej biologii. Certyfikowany operator Sensitiv Imago 530. Ukończył szkolenie z obsługi urządzenia BICOM. Ukończył kursy metody samokontroli umysłu metodą Silvy. Dzięki specjalistycznym kursom naturoterapii zdobył umiejętności  wykonywania masażu bańką chińską, masażu energetycznego polarity oraz Reiki, świecowania i konchowania uszu. Pasjonat i student medycyny chińskiej. Refleksoterapeuta.  Jego misją jest szczera pomoc w rozwiązywaniu problemów zdrowotnych oraz poszerzanie świadomości społeczeństwa.',
    image: './images/mateusz.jpg'
  }]
});

// Pricing.
app.controller('PricingController', function ($scope) {
  // console.log('inside pricing controller');

  $scope.data = [{
    title: 'Diagnoza kontrolna',
    price: '0 zł'
  }, {
    title: '<strong>Diagnoza BICOM</strong><br>(narządy, pasożyty, pierwotniaki, grzyby chorobotwórcze, bakterie (w tym borelioza), wirusy, metale ciężkie)',
    price: ''
  }, {
    title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dorosły',
    price: '<s>250 zł</s> 200 zł'
  }, {
    title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dziecko (do 10 lat)',
    price: '<s>200 zł</s> 150 zł'
  }, {
    title: 'Wybrana diagnoza (pasożyty/grzyby/bakterie/borelioza i koinfekcje/wirusy/narządy/alergie/ metale ciężkie/hormony/witaminy)',
    price: '70 zł'
  }, {
    title: 'Testy alergiczne',
    price: '2 zł/alergen'
  }, {
    title: 'Odczulanie (jednorazowe)',
    price: '40 zł'
  }, {
    title: 'Terapia BICOM (jednorazowa)',
    price: '70 zł'
  }, {
    title: 'Terapia uzależnień BICOM (jednorazowa)',
    price: '100 zł'
  }, {
    title: 'Pełna terapia uzależnień BICOM (karnet)',
    price: '320 zł'
  }, {
    title: 'BICOM Chip',
    price: '30 zł'
  }, {
    title: 'Dobranie rodzaju oraz dawki leku za pośrednictwem BICOM',
    price: 'od 20 zł'
  }, {
    title: 'Tworzenie indywidualnych leków informacyjnych za pośrednictwem BICOM',
    price: 'od 20 zł'
  }, {
    title: 'Konsultacja totalnej biologii (chorób o podłożu psychosomatycznym)',
    price: '100 zł/h'
  }, {
    title: 'Mieszanka esencji kwiatowych dr. Bacha',
    price: '30 zł'
  }, {
    title: 'Ekspertyza radiestezyjna (domu,działki,mieszkania)',
    price: 'od 200 zł'
  }]
});

// Contact.
app.controller('ContactController', function ($scope, $compile, NgMap) {
  // console.log('inside contact controller');
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
        this.successMessage = document.getElementById('sendmessage');
        this.successMessage.className += ' show';
        // console.log('success while sending, response data: ' + response.data);
      }, function errorCallback(response) {
        this.errorMessage = document.getElementById('errormessage');
        this.errorMessage.className += ' show';
        // console.log('error while sending, response: ' + response);
      });
  }
});

// Google Analytics.
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-102822762-1', 'auto');
ga('send', 'pageview');

// Scroll to top.
$(window).scroll(function() {
  // Check if page is scrolled more than 200 px.
  if ($(this).scrollTop() >= 200) {
    // Page is scrolled more than 200 px.

    $('#return-to-top').fadeIn(100); // Fade in the arrow.
  } else {
    $('#return-to-top').fadeOut(100); // Fade out the arrow.
  }
});
$('#return-to-top').click(function () {
  // Arrow is clicked.
  $('body, html').animate({
    scrollTop: 0 // Scroll to top of body.
  }, 2000);
});
