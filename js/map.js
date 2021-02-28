
function mapLoad(){
    //step 1. Define the lat lon coordinate
    var latLng = [37.941880, 22.928038];
    var latLng2 = [36.941870, 22.928035];
    // step 2. set attribution and access key url
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
    // step 3. define two tile layer variables (first variable is Url variable, then JS object, then keys and values)
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

    var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
    
    // step 4. define map object
    var map = L.map('map', {
      center: latLng,
      zoom: 5,
      layers: [streets]
    });
    

    // step 5. add a marker with pop-up
    var baseLayers = {
      "Grayscale": grayscale,
    //   "Streets": streets
    };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
    .bindPopup("<b>Lucius'<br>Hometown</b>").openPopup();
    L.marker(latLng2).addTo(map)
    .bindPopup("<b>Test<br>2</b>");
  
    //Click event
    // var popup = L.popup();
    // function onMapClick(e) {
    //   popup
    //   .setLatLng(e.latlng)
    //   .setContent("You clicked the map at " + e.latlng.toString())
    //   .openOn(map);
    // }
    map.on('click', onMapClick);
}