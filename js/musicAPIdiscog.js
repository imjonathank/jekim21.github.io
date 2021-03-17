function searchMusic() {
    //declare variable from user input
    var artistName = document.getElementById('artistInput').value;
    var albumName = document.getElementById('albumInput').value; 

    //declare base url for the API
    var url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName + "&a=" + albumName;

    // var albumDiv = document.getElementById('albumArt');


    fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('PROBLEM! Status code is: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                let jsonContent = data.album[0];
                console.log(jsonContent);
                albumDiv.src = jsonContent.strAlbumThumb;
                document.getElementById('albumYear').innerText = jsonContent.intYear
                document.getElementById('albumGenre').innertext = jsonContent.strGenre
                document.getElementById('albumDesc').innertext = jsonContent.strDesc

            });
        });
    }
}