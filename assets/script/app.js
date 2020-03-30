$("#search-button").on("click", function (event) {
    // preventing button from trying to submit the forbm
    event.preventDefault();
    $("#information-display").empty();
    $("#poster-image").empty();
    $("#trailers").empty();
    // $("#poster-display").attr("style", "display:block;")
    $("#poster-image").attr("style","display:inline-block;");
    // $("#perfect-cell").attr("style","display:block;");
   $("#information-display").attr("style","display:inline-block;");
    // store the keydown/ onclick value as a variable
    $("#small-container").attr("style","display:inline-block")
    var userInput = $("#user-input").val().trim();
    console.log(userInput);
    // pass the search function the user input as an argument 
    streamingLocation(userInput);

    function youtubeAPI(input){
      $.ajax({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        data:{ 
          key: "AIzaSyB4F4I4IMaXS_dYV8OgCHKwex9j-rd5s3g",
          q: input + " trailer",
          part: "snippet",
          maxResults: 1,
          type: "video",
          videoEmbeddable: true,
        },
        // success: function (data){
        //   embedVideo(data)
        // },
        // error : function (response){
        //   console.log("request failed")
        // }
      }).then(function(response){
        console.log(response)
        // console.log(response.items[0].id.kind)
       var trailer="https://www.youtube.com/embed/" + (response.items[0].id.videoId)
      console.log(trailer)
        // console.log("https://www.youtube.com/watch?v=" +  trailer )
        $("#trailers").append($("<iframe>").width(600).height(400).attr("src", trailer))
      })
    }
      // pass the search function the user input as an argument 
      // streamingLocation(userInput);
      // movieInfo(userInput);
      youtubeAPI(userInput)
      // randomFunction();
      // $.when(streamingLocation(userInput)).then(function(){
      //     movieInfo(userInput);
      //   })
      // <iframe width="956" height="538" src="https://www.youtube.com/embed/zAGVQLHvwOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
});
