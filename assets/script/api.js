//create variable to hold queryURL for utelly api
//create function to run ajax request
// .then funtion() to run call for JSON objects (streaming service availability)
//append properties to DOM
//create function that gets properties from api DOM tree
//appends property values to DOM




function searchShowMovie(input) {

    //var movie = "lion king";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + input + "&country=uk",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "bd1d73db3cmshe29def704ad7f7cp14f31cjsnd1be6b807fca"
        }
    }

    $.ajax(settings).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
            if (response.results.length > 10){
                response.results.length = 10;
            };
            console.log(response);
            console.log(response.results[i]);

            for (var j = 0; j <response.results[i].locations.length; j++) {

                console.log(response.results[i].locations[j]);
                var streamingService = response.results[i].locations[j].display_name;
                console.log(streamingService);
                var streamInfo = $("<p>").text("Available on: " + streamingService);
                $("#available-on-1").append(streamInfo);
            };
        };

    });
};

//create for loop to iterate through multiple objects in DOM tree
//create nested for loop to iterate through locations for other display_names
//create OMDB ajax request **not MVP**
