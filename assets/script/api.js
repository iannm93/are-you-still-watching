
//create function to run ajax request
function streamingLocation(input) {

  //create variable to hold queryURL for utelly api
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

  //funtion() to run call for JSON objects (streaming service availability)
  $.ajax(settings).then(function (response) {

    //DOM tree properties stored in variable for semantic
    var movie = response.results[0];
    movieInfo(input);

    for (var i = 0; i < movie.locations.length; i++) {
      //create nested for loop to iterate through locations for other display_names
      console.log(movie.locations[i]);
      var streamingService = movie.locations[i].display_name;
      console.log(streamingService);
      //create variable to store info from JSON object to append property values to DOM
      var streamInfo = $("<p>").text(streamingService);
      //append properties to DOM
      $("#information-display").append(streamInfo);
    };
  });
};

//create OMDB ajax request **not MVP**

function movieInfo(input) {
  var movie = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + input + "&apikey=trilogy";
  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    $("#poster-image").append($("<img>").attr("src", response.Poster).addClass(".poster-button"));
    // Find the object property for the movie imdb rating
    // create html element  
    // display the property
    $("#information-display").append($("<h6>").text("IMdB Rating: " + response.imdbRating));
    // Find the object property for the movie release date
    // create html element  
    // display the property
    $("#information-display").append($("<h6>").text("Release Date: " + response.Released));
    // Find the object property for the movie plot
    // create html element        
    // display the property
    $("#information-display").prepend($("<h4>").text("Title: " + response.Title));
    $("#poster-image").on("click", function () {
      console.log(response.Plot)
      $(".dropdown-pane").text(response.Plot)
      //$("#here").html($("<p>").text(response.Plot));
    })
  });
}