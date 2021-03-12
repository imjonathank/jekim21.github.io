function wikiAPI() {
// step 1: configure your HTML page 
//     configure input #searchTerm on the HTML page for input
//     configure div #wiki on the HTML page for output
//     configure a button to invoke this particular function() 
//     load this JS file using <script> 
// step 2: define your variables
//     create an XHR Object
//     define base URL for API and insert searchTerm variable
document.getElementById("wiki").innerHTML = "";
var parentDiv = document.getElementById('wiki');
removeResults(parentDiv);
var searchTerm = document.getElementById("searchTerm").value;
var connect = new XMLHttpRequest();
var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

// step 3: open the API call 
connect.open('GET', url);

// step 4: define the actions that will happen when the response is returne:, parse and display the data
//     load and parse the response as a JSON data object
//     console.log the data object to see what you got as a response
//     locate the branch of the object that is of interest
//     loop through the branch and ouput the Wiki pages to the HTML page
connect.onload = function () {
    var wikiObject = JSON.parse(this.response); 
    // console.log(wikiObject);
    var pages = wikiObject.query.pages;
    for (i in pages) {
        var pageURL="https://en.wikipedia.org/?curid="
        var newAnchor = document.createElement("a");
        newAnchor.href = pageURL+pages[i].pageid;
        newAnchor.className= 'd-block';
        newAnchor.innerText = pages[i].title;
        document.getElementById("wiki").appendChild(newAnchor);
    };
    // for (var i in pages) {
    //     var pageLink = "https://en.wikipedia.org/?curid=" + pages[i].pageid;
    //     var newElement = document.createElement("div");
    //     newElement.href = pageLink
    //     newElement.setAttribute('class','row h5');
    //     newElement.setAttribute('target','_blank');
    //     document.getElementById("wiki").appendChild(newElement);
    //     newElement.innerText = pages[i].title;
       
    // };
};
// step 5: send API request to the server
connect.send();
document.getElementById("searchTerm").value= "";


}