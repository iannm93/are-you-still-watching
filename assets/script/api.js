//create variable to hold queryURL for utelly api
//create function to run ajax request
// .then funtion() to run call for JSON objects (streaming service availability)
//append properties to DOM
//create function that gets properties from api DOM tree
//appends property values to DOM
function searchMovie(){

    
    var movie = "lion king";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + movie + "&country=uk",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "bd1d73db3cmshe29def704ad7f7cp14f31cjsnd1be6b807fca"
        }
    }
    
    $.ajax(settings).then(function (response) {
        console.log(response);
        console.log(response.results[0]);
        console.log(response.results[0].locations[0]);
        var streamingService= response.results[0].locations[0].display_name; 
        console.log(streamingService);

        
    });

}

searchMovie();