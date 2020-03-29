$("#search-button").on("click", function (event) {

    // preventing button from trying to submit the forbm
    event.preventDefault();
    $("#information-display").empty();
    $("#poster-image").empty();
    // $("#poster-display").attr("style", "display:block;")
    $("#poster-image").attr("style","display:block;");
    // $("#perfect-cell").attr("style","display:block;");
   $("#information-display").attr("style","display:block;");
   //$(".poster-button").attr("id", "poster-image").attr("class", "poster-button").attr("type","button").attr("data-toggle", "example-dropdown-bottom-center");
    // store the keydown/ onclick value as a variable
    var userInput = $("#user-input").val().trim();
    console.log(userInput);

    // pass the search function the user input as an argument 
    streamingLocation(userInput);
});
