
// $("#poster-display").hide();
// $("#information-display").hide();

$("#search-button").on("click", function (event) {

    // preventing button from trying to submit the form
    event.preventDefault();
    // $("#poster-display").show();
    // $("#information-display").show();
    // store the keydown/ onclick value as a variable
    var userInput = $("#user-input").val().trim();
    console.log(userInput);

    // pass the search function the user input as an argument 
    //streamingLocation(userInput);
    movieInfo(userInput);


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
