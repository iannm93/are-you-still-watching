$("#search-button").on("click", function (event) {
    // preventing default behavior
    event.preventDefault();
    // empty all the elements each time the user searches
    $("#information-display").empty();
    $("#poster-image").empty();
    $("#trailers").empty();
    $("#poster-image").attr("style","display:inline-block;");
    // gives the information display/small-container divs an inline block
   $("#information-display").attr("style","display:inline-block;");
   
    $("#small-container").attr("style","display:inline-block")
    // store the user's search value as a variable
    var userInput = $("#user-input").val().trim();
    // pass the search function the user input as an argument 
    streamingLocation(userInput);
    // call the youtube API
    function youtubeAPI(input){
      $.ajax({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        data:{ 

          // Kyle's key AIzaSyBEvfU24tFTCbHE2Ua8dpDQPJ-sVD0A9Ko
          // Ian's key  AIzaSyB4F4I4IMaXS_dYV8OgCHKwex9j-rd5s3g
          // Melvin's key AIzaSyCgRDv-PRHPvXAN9yMAZWaSICDhRRfOuHs
                     //   AIzaSyDa-yttRLO2DiuNCpPVRyROynAvdeDKALM

          key: "AIzaSyBEvfU24tFTCbHE2Ua8dpDQPJ-sVD0A9Ko",
          q: input + " trailer",
          part: "snippet",
          maxResults: 1,
          type: "video",
          videoEmbeddable: true,
        },
     
      }).then(function(response){
        console.log(response)
      //  create a variable storing the watch ID of the requested video as a response
       var trailer="https://www.youtube.com/embed/" + (response.items[0].id.videoId)
      // concat the watch ID into the embed link
        $("#trailers").append($("<iframe>").width(420).height(315).attr("src", trailer))
      })
    }
      youtubeAPI(userInput)
      
     
});
