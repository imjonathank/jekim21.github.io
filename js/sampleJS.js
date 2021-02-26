function conditional(){
    alert("Use Inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18) {
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
}
function howdy(yourFirstName) {
    alert("Howdy " + yourFirstName); 
}

function checkTime() {
    let selectedElement = document.getElementById("minute");
    console.log(selectedElement);
    const now =new Date();
    selectedElement.innerText = now.getMinutes();
}

function evalNumber(){
    //js code goes here. but no params being passed through
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.")
    } else if (inputValue % 2 == 0) {
        alert(inputValue + " is an even number.")
    } else {
        alert(inputValue + " is an odd number.")
    }
}
 
function changeTitle(){
    let selectedElement = document.getElementById("programCard");
    console.log(selectedElement);
    selectedElement.innerText = "DIGS";
    // selectedElement.style.display="none";
}

function scopeValues() {
    if (0==0) {
        var x = 0;
        let y = 1;
    } else {
        alert("Why is 0 not 0?");
    };
    
    const z = x; 
    alert("Use Inspect to see the console and inspect the code.")
    console.log("Check the sources to see this code and study the scope of the declarations.")
    console.log("Value of x as originally declared: " + x);
    console.log("Value of y as originally declared: " + y);
    var x = x+2;
    console.log("Value of X + 1: " + x);
    console.log("Value of z: " + z + " does not change.");
};


// var book = new Object(); // object constructor
// var album = (); // creates a new undefined object called album


function mapLoad(){
    //step 1. Define the lat lon coordinate
    var latLng = [37.941880, 22.928038];
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
      zoom: 9,
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

function searchMusic() {
    var artistName = document.getElementById('artistInput').value;
    // var albumName = document.getElementById('albumInput').value;
    var url = "theaudiodb.com/api/v1/json/1/search.php?s=" + artistName;
    // var albumDiv = document.getElementById('albumArt');
    fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log("PROBLEM! Status code is: " + response.status);
            }
            response.json().then(function(data) {
                console.log(data);
                let jsonContent = data.artist[0];
                console.log(jsonContent)
            });
        });
}


// function addElements(){
//     var valueArray = ['first','second','third'];
//     for (i in valueArray) {
//         var newDiv = document.createElement("div");
//         newDiv.setAttribute('class', 'row');
//         newDiv.setAttribute('id', 'div '+i);
//         document.getElementById('addElements').appendChild(newDiv)
//         newDiv.innerText = valueArray[i];
//     };
// }
function addElements(){
    var valueArray = ['Book 1', 'Book 2', "Book 3"];
    for (i in valueArray) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'col-md h1');
        newDiv.setAttribute('id', 'div '+i);
        document.getElementById('bibliography').appendChild(newDiv);
        newDiv.innerText = valueArray[i];
    };
    var valueArray2 = ['Lindsay, Jack: The Golden Ass', 'Nock, Arthur Darby: Conversions', "Kenney, E. J.: Apuleius' Cupid and Psyche"];
    for (i in valueArray2) {
        var newH6 = document.createElement('h6');
        document.getElementById('div ' + i).appendChild(newH6);
        newH6.innerText = valueArray2[i];
    };
}

function parseArray() {}

/* <div class="row">
            <div class="col-md h1">Book 1</div>
                <h6>Lindsay, Jack: The Golden Ass</h6>
                <img src="https://catalog.lib.uchicago.edu/vufind/Cover/Show?author=Apuleius&callnumber=PA6209.M3L7+1962&size=medium&title=The+golden+ass.&recordid=661199&source=Solr&isbn=0253200369&oclc=36001556" class="img-fluid" style="width:200px;height:200px;" alt="" >
            <div class="col-md h1">Book 2</div>
                <h6>Nock, Arthur Darby:	Conversions</h6>
                <img src="https://catalog.lib.uchicago.edu/vufind/Cover/Show?author=Nock%2C+Arthur+Darby%2C+1902-1963&callnumber=BL639+.N63+1998&size=medium&title=Conversion+%3A+the+old+and+the+new+in+religion+from+Alexander+the+Great+to+Augustine+of+Hippo+%2F&recordid=2968858&source=Solr&isbn=0801859107&oclc=38016592" class="img-fluid" style="width:200px;height:200px;" alt="" >
            <div class="col-md h1">Book 3</div>
                <h6>Kenney, E. J.: Apuleius' Cupid and Psyche</h6>
                <img src="https://catalog.lib.uchicago.edu/vufind/Cover/Show?author=Apuleius&callnumber=PA6207.M4K36+1990&size=medium&title=Cupid+%26+Psyche+%2F&recordid=1133397&source=Solr&isbn=0521260388&oclc=21226525" class="img-fluid" style="width:200px;height:200px;" alt="" >   
        </div> */