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