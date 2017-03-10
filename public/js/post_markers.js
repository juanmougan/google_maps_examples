// JS scripts for "post_markers.html"

function postMarker(lat, lng) {
  var markerLatLng = {
    "lat": lat,
    "lng": lng
  }
  $.ajax({
    url: 'http://demo5692692.mockable.io/locations',    // TODO use a definitive mock instead
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data:  markerLatLng
  }).done(function(data) {
    console.log("POST OK")
    console.dir(data)
  }).fail( function() {     // TODO FIXME eventually, div is not added
    console.log("Error saving marker in the database");
    var errorDiv = '<div class="alert alert-danger fade in">'
    $( "body" ).add( errorDiv )
  })
}

function initMap() {
  console.log("Init map")
  var myLatLng = {lat: -34.616, lng: -58.573};      // Buenos Aires
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });
  
  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng)
    postMarker(event.latLng.lat(), event.latLng.lng())
  });
  
  function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
  }
}
