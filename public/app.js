var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });

};

var contentString = "Terem Palace or Teremnoy Palace (Russian: Теремной дворец) is a historical building in the Moscow Kremlin, Russia, which used to be the main residence of the Russian tsars in the 17th century. Its name is derived from the Greek word τερεμνον (i.e., 'dwelling'). Currently, the structure is not accessible to the public, as it belongs to the official residence of the President of Russia.";

var infowindow = new google.maps.InfoWindow({
  content: contentString
});

var marker; 

MapWrapper.prototype = {
  addMarker: function(coords){
      marker = new google.maps.Marker({
      position:coords, 
      map: this.googleMap,
      animation: google.maps.Animation.BOUNCE
    })   
  }, 
  addClickEvent: function(){
   marker.addListener(this.googleMap, "click", function(event){ // need three arguments
    //   var lat = event.latLng.lat();
    //   var long =event.latLng.lng();
    //   var center = {lat: 55.750330332, lng: 37.609330896};
    //   this.addMarker(center);
    // }.bind(this));

     infowindow.open(this.googleMap, this);
    })
  }

};



var app = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 55.750330332 ,lng: 37.609330896};
  var zoom =16;
  var mainMap = new MapWrapper(container, center, zoom);
  mainMap.addMarker(center);
  mainMap.addClickEvent();

};



window.onload = app;



