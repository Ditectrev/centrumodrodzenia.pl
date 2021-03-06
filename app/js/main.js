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
    description: 'Podczas kuracji narz??dy s?? stymulowane do usuwania toksyn oraz dostrajaj?? si?? do cz??stotliwo??ci organ??w pracuj??cych prawid??owo. Jest to bezpieczna, szybka i skuteczna metoda w leczeniu wielu schorze??.',
    image: './images/narzady.jpg'
  }, {
    description: '<b>Najcz??stsze objawy</b>:  zm??czenie, zaburzenia koncentracji i pami??ci, ot??pienie, dr??twienie ko??czyn, zaburzenia rytmu serca, s??aba wydolno???? fizyczna, b??le staw??w, sztywno???? karku, depresja, silne b??le g??owy i inne.',
    image: './images/borelioza.jpg'
  }, {
    description: 'Dok??adna diagnostyka konkretnego rodzaju bakterii lub wirusa zapewnia szybk??, skuteczn?? i bezpieczn?? terapi?? bez konieczno??ci stosowania substancji syntetycznych bardzo cz??sto wywo??uj??cych liczne skutki uboczne.',
    image: './images/bakterie.jpg'
  }, {
    description: '<b>Najcz??stsze objawy</b>: pokas??ywanie, okresowe napady suchego kaszlu, chrz??kanie, nadmierny apetyt bez przyrostu wagi, os??abienie, anemia, podkr????one oczy, b??le brzucha, zaparcia lub biegunki, problemy sk??rne (np. wysypka) i inne.',
    image: './images/pasozyty.jpg'
  }, {
    description: '<b>Najcz??stsze objawy</b>: zm??czenie, sucho???? w ustach, uczucie zatkanego nosa, nawracaj??ce, trudno goj??ce si?? problemy sk??rne (??wi??d, ??uszczenie), alergie, ??luzowate stolce, wzd??cia, nieokre??lone b??le brzucha i inne.',
    image: './images/grzyby.jpg'
  }, {
    description: 'Biorezonans wykazuje bardzo du???? skuteczno???? w leczeniu bezsenno??ci ??? efekty s?? odczuwane ju?? w dniu terapii. Terapia obejmowa?? mo??e tak??e popraw?? samopoczucia, eliminacj?? l??k??w, stresu i wiele innych.',
    image: './images/psychologia.jpg'
  }, {
    description: '<b>Najcz??stsze objawy alergii</b>: katar, cz??ste kichanie, kaszel, sw??dzenie, pieczenie i przekrwienie oczu, os??abienie, dra??liwo????. Ze strony uk??adu pokarmowego: problemy sk??rne, biegunka i utrata masy cia??a.',
    image: './images/alergia.jpg'
  }, {
    description: 'Terapia ma na celu zmniejszenie ch??ci ulegania na??ogowi. Jednocze??nie wspomaga odtruwanie organizmu ze szkodliwych z??og??w nagromadzonych na skutek u??ywania papieros??w/narkotyk??w itp. ??? zmys??y i neuroprzeka??niki zaczynaj?? dzia??a?? w??a??ciwie.',
    image: './images/uzaleznienia.jpg'
  }, {
    description: '<b>Najcz??stsze objawy obci????enia organizmu toksynami</b>: ci??g??e zm??czenie, os??abienie koncentracji i pami??ci, choroby przewlek??e (np. choroby  tarczycy). W nast??pstwie tak??e choroby nowotworowe.',
    image: './images/detoks.jpg'
  }]
});

// About us.
app.controller('AboutController', function ($scope, $compile) {
  // console.log('inside about controller');

  $scope.data = [{
    name: 'Klaudia Buczek',
    title: 'Za??o??ycielka',
    description: 'Z wykszta??cenia mgr chemii medycznej. Konsultantka totalnej biologii, radiesteta???terapeutka oraz refleksoterapeutka. Obecnie tak??e studentka ostatniego semestru naturoterapii we Wroc??awskim Studium Edukacji Ekologicznej, co da jej zaw??d naturopaty. Pasjonatka i studentka medycyny chi??skiej oraz opartej na niej dietetyki pi??ciu przemian. Certyfikowana operatorka biorezonansu Sensitiv Imago 530. Uko??czy??a tak??e szkolenie z obs??ugi urz??dzenia BICOM. Odby??a kurs metody samokontroli umys??u metod?? Silvy. Dzi??ki specjalistycznym kursom naturoterapii zdoby??a umiej??tno??ci  wykonywania masa??u ba??k?? chi??sk??, masa??u energetycznego polarity, ??wiecowania uszu. W swojej pracy kieruje si?? poszukiwaniem prawdziwej przyczyny problemu co zapewnia skuteczno???? oraz precyzj?? w dzia??aniu.',
    image: './images/klaudia.jpg'
  }, {
    name: 'Mateusz Pruszowski',
    title: 'Za??o??yciel',
    description: 'Wy??sze wykszta??cenie zdoby?? na Politechnice Wroc??awskiej na studiach o specjalno??ci In??ynieria Chemiczna i Procesowa. Obecnie ko??czy studia we Wroc??awskim Studium Edukacji Ekologicznej daj??ce zaw??d naturopaty, bioenergoterapeuty oraz radiestety. Konsultant totalnej biologii. Certyfikowany operator Sensitiv Imago 530. Uko??czy?? szkolenie z obs??ugi urz??dzenia BICOM. Uko??czy?? kursy metody samokontroli umys??u metod?? Silvy. Dzi??ki specjalistycznym kursom naturoterapii zdoby?? umiej??tno??ci  wykonywania masa??u ba??k?? chi??sk??, masa??u energetycznego polarity oraz Reiki, ??wiecowania i konchowania uszu. Pasjonat i student medycyny chi??skiej. Refleksoterapeuta.  Jego misj?? jest szczera pomoc w rozwi??zywaniu problem??w zdrowotnych oraz poszerzanie ??wiadomo??ci spo??ecze??stwa.',
    image: './images/mateusz.jpg'
  }]
});

// Pricing.
app.controller('PricingController', function ($scope) {
  // console.log('inside pricing controller');

  $scope.data = [{
    title: 'Diagnoza kontrolna',
    price: '0 z??'
  }, {
    title: '<strong>Diagnoza BICOM</strong><br>(narz??dy, paso??yty, pierwotniaki, grzyby chorobotw??rcze, bakterie (w tym borelioza), wirusy, metale ci????kie)',
    price: ''
  }, {
    title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Doros??y',
    price: '<s>250 z??</s> 200 z??'
  }, {
    title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dziecko (do 10 lat)',
    price: '<s>200 z??</s> 150 z??'
  }, {
    title: 'Wybrana diagnoza (paso??yty/grzyby/bakterie/borelioza i koinfekcje/wirusy/narz??dy/alergie/ metale ci????kie/hormony/witaminy)',
    price: '70 z??'
  }, {
    title: 'Testy alergiczne',
    price: '2 z??/alergen'
  }, {
    title: 'Odczulanie (jednorazowe)',
    price: '40 z??'
  }, {
    title: 'Terapia BICOM (jednorazowa)',
    price: '70 z??'
  }, {
    title: 'Terapia uzale??nie?? BICOM (jednorazowa)',
    price: '100 z??'
  }, {
    title: 'Pe??na terapia uzale??nie?? BICOM (karnet)',
    price: '320 z??'
  }, {
    title: 'BICOM Chip',
    price: '30 z??'
  }, {
    title: 'Dobranie rodzaju oraz dawki leku za po??rednictwem BICOM',
    price: 'od 20 z??'
  }, {
    title: 'Tworzenie indywidualnych lek??w informacyjnych za po??rednictwem BICOM',
    price: 'od 20 z??'
  }, {
    title: 'Konsultacja totalnej biologii (chor??b o pod??o??u psychosomatycznym)',
    price: '100 z??/h'
  }, {
    title: 'Mieszanka esencji kwiatowych dr. Bacha',
    price: '30 z??'
  }, {
    title: 'Ekspertyza radiestezyjna (domu,dzia??ki,mieszkania)',
    price: 'od 200 z??'
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
