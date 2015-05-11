var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom:7,
    center: chicago
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

function calcRoute() {
	//Start will be address1, end will be the intermediate point between address1 and address2
	//Maybe we can display two maps, one from users house and one from friends house? and the
	//routes they'll each take to the intermediate point. 
  var start = "Toronto";
  var end = "Montreal";
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}