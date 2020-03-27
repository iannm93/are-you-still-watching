
// //create function to run ajax request
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
//             movieInfo(input);
            
//             for (var j = 0; j <movie.locations.length; j++) {
                
//                 //create nested for loop to iterate through locations for other display_names
//                 console.log(movie.locations[j]);
//                 var streamingService = movie.locations[j].display_name;
//                 console.log(streamingService);
//                 //create variable to store info from JSON object to append property values to DOM
//                 var streamInfo = $("<h4>").text("Available on: " + streamingService);
//                 //append properties to DOM
//                 $("#information-display").append(streamInfo);
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

      $("#info-grid").append($("<div>").addClass("grid-x grid-margin-x").attr("id", "pond-2"));
      $("#pond-2").append($("<div>").addClass("cell medium-4").attr("id", "test-2"));
      $("#test-2").append($("<button>").attr("id","poster-image-1").attr("type", "button").attr("data-toggle","dropdown-1").attr("style", "display: block;"));
      $("#test-2").append($("<div>").addClass("dropdown-pane").attr("data-position", "bottom").attr("data-alignment", "center").attr("id", "dropdown-1").attr("data-auto-focus", "true"));
      $("#poster-image-1").append($("<img>").attr("src", response.Poster));

      $("#poster-image").append($("<img>").attr("src", response.Poster).addClass(".poster-button"));

      $("#pond-2").append($("<div>").addClass("cell medium-4").attr("id", "test-3"));
      $("#test-3").append($("<div>").attr("id", "information-display-1").addClass("callout").attr("style", "display:block;"));
      $("#information-display-1").append($("<h2>").attr("id", "search-title-2").text("Title: " + response.Title));
      $("#information-display-1").append($("<h3>").attr("id", "available-on-2").text("Streaming service display"));
      $("#information-display-1").append($("<h4>").attr("id", "year-released-2").text("Release Date: " + response.Released));
      $("#information-display-1").append($("<h4>").attr("id", "search-rating-2").text("IMdB Rating: " + response.imdbRating));
      
          
      // Find the object property for the movie imdb rating
      // create html element  
      // display the property
      $("#information-display").append($("<h4>").text("IMdB Rating: " + response.imdbRating));
            // Find the object property for the movie release date
      // create html element  
      // display the property
      $("#information-display").append($("<h4>").text("Release Date: " + response.Released));   
      // Find the object property for the movie plot
      // create html element        
      // display the property
      $("#information-display").append($("<h2>").text("Title: " + response.Title));
    });
  }

  // function resultSpace(){
  //   var posterSpace = document.createDocumentFragment();
  //   console.log("resultSpace ran");
  //   for (var k=0; k<5; k++){
  //     var posterDiv = document.createElement("div");
  //     posterDiv.id = "poster-image-" + k;
  //     posterDiv.className = "poster-button"
  //     posterSpace.appendChild(posterDiv);
  //     }
  //     $("#info-grid").append(posterSpace);
  // }

  // resultSpace()

  //create new div with class grid x
  //append to grid y
  //create variable to hold new div for image cell
  //crete new div with class cell medium 4
  //apend to grid x
  //create new button id poster image
  //append div cell medium 4