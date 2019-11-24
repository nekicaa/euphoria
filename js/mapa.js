function myMap() {
var mapProp= {
    center:new google.maps.LatLng(43.1570638,22.5860433),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}