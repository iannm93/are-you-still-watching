
//create function to run ajax request
// function streamingLocation(input) {
    
//     //create variable to hold queryURL for utelly api
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + input + "&country=uk",
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
//             "x-rapidapi-key": "bd1d73db3cmshe29def704ad7f7cp14f31cjsnd1be6b807fca"
//         }
//     }
    
//     // .then funtion() to run call for JSON objects (streaming service availability)
//     $.ajax(settings).then(function (response) {
//         //create for loop to iterate through multiple objects in DOM tree
//         for (var i = 0; i < response.results.length; i++) {
//             //DOM tree properties stored in variable for semantic
//             var movie = response.results[i];
//             if (response.results.length > 10){
//                 response.results.length = 10;
//             };
//             console.log(response);
//             console.log(response.results[i]);
            
//             for (var j = 0; j <movie.locations.length; j++) {
                
//                 //create nested for loop to iterate through locations for other display_names
//                 console.log(movie.locations[j]);
//                 var streamingService = movie.locations[j].display_name;
//                 console.log(streamingService);
//                 //create variable to store info from JSON object to append property values to DOM
//                 var streamInfo = $("<p>").text("Available on: " + streamingService);
//                 //append properties to DOM
//                 $("#available-on-1").append(streamInfo);
//             };
//         };
        
//     });
// };

//create OMDB ajax request **not MVP**

function movieInfo(input) {
    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + input + "&apikey=trilogy";
    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)
      $("#poster-image").html($("<img>").attr("src", response.Poster));
    });
  }
