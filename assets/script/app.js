// #poster-image , was created on img tag on line 64
// #small-container , was created for section to loop result cards
// #search-title-1 , was created to store title
// #year-released-1 , was created to store release date
// #available-on-1 , was created to store available platforms
// #search-rating-1 , was created to store rating


// id's from above have siblings ending in -2 as a placeholder for what second return would look like.


function searchShowMovie(input) {
    // AJAX CALL GOES HERE (for visualization)
}
$("#search-button").on("click", function (event) {

    // preventing button from trying to submit the form
    event.preventDefault();
    // store the keydown/ onclick value as a variable
    var userInput = $("#user-input").val().trim();
    console.log(userInput);

    // pass the search function the user input as an argument 
    searchShowMovie(userInput);

    // empty the movie title div
    $("#MOVIETITLE").empty();

    // append movie title to movie ID
    
    $("#MOVIETITLE").append(movieName);
    
    // empty the movie rating div

    $("#MOVIERATING").empty();

    

    // append movie rating to rating ID
    ("#MOVIERATING").append(rating);

    // empty the stream info div
    $("#STREAMINFO").empty();

    // append stream information to stream ID
    $("#STREAMINFO").append(streaminfo);

    // emptyu the release year info div
    $("#RELEASEYEAR").empty();


    // append release year to realease iD
    $("#RELEASEYEAR").append(release);

});
// this is the exact same function as the above, just for keydown (possibly refactor into one function)
// $('#IDGOESHERE').keypress(function (event) {
//     var keycode = (event.keyCode ? event.keyCode : event.which);
//     if (keycode == '13') {
//         event.preventDefault();
//         var userInput = $("#IDGOESHERE").val().trim();

//         searchShowMovie(userInput);
//     }
// });
