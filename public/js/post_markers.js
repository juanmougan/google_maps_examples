// JS scripts for "post_markers.html"

function postMarker(markerData) {
  console.log("markerData: " + markerData + " of type: " + Object.prototype.toString.call(markerData))
  console.log("markerData lat: " + markerData["lat"] + " of type: " + Object.prototype.toString.call(markerData["lat"]))
  console.log("markerData long: " + markerData["long"] + " of type: " + Object.prototype.toString.call(markerData["long"]))
  $.ajax({
    url: 'http://localhost:4567/pedidos/guardar',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data:  markerData
  }).done(function(data) {
    console.log("POST OK" + data)
  
  }).fail( function() {
    alert( 'Error posting marker' );
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
    postMarker(event.latLng)
  });
  
  function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
  }
}
