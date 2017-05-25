// Define angular module/app.
var formApp = angular.module('contactApp', []);

// Create angular controller and pass in $scope and $http.
var controller = formApp.controller('contactForm', ['$scope', '$http', function ($scope, $http) {
  $scope.formData = {};

  // Process the form.
  $scope.processForm = function () {
    $http({
      method  : 'POST',
      url     : 'contact-form.php',
      data    : $scope.formData, // Angular will take care about serializing.
      headers : {'Content-Type': 'application/x-www-form-urlencoded'} // Set the headers so angular passing info as form data (not request payload).
    })

      // .success(function (data) {
      //   console.log(data);
      //
      //   if (!data.success) {
      //     // If not successful, bind errors to error variables.
      //     $scope.errorName = data.errors.name;
      //     $scope.errorSubject = data.errors.subject;
      //     $scope.errorTelephone = data.errors.telephone;
      //     $scope.errorEmail = data.errors.email;
      //     $scope.errorMessage = data.errors.message;
      //   } else {
      //     // If successful, bind success message to message
      //     $scope.message = data.message;
      //   }
      // });
  };
}]);


// function formController($scope, $http) {
//   // Create a blank object to hold our form information, $scope will allow this to pass between controller and view.
//   $scope.formData = {};
//
//   // Process the form.
//   $scope.processForm = function () {
//     $http({
//       method  : 'POST',
//       url     : 'php/contact-form.php',
//       data    : $.param($scope.formData), // Pass in data as strings.
//       headers : {'Content-Type': 'application/x-www-form-urlencoded'} // Set the headers so angular passing info as form data (not request payload).
//     })
//
//       .success(function (data) {
//         console.log(data);
//
//         if (!data.success) {
//           // If not successful, bind errors to error variables.
//           $scope.errorName = data.errors.name;
//           $scope.errorSubject = data.errors.subject;
//           $scope.errorTelephone = data.errors.telephone;
//           $scope.errorEmail = data.errors.email;
//           $scope.errorMessage = data.errors.message;
//         } else {
//           // If successful, bind success message to message
//           $scope.message = data.message;
//         }
//       });
//   };
// }