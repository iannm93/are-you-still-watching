## Are You Still Watching?
> Are You Still Watching - A Television and Movie Scraper

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Status](#status)
* [Contact](#contact)

## General info
This is a basic browser web-page that takes a user input from a search bar and uses that input to pull up streaming availability about a given show. The user will be returned with information regarding where the show can be streamed, how the show was received by critics, and  other pertinent information.

## Screenshots
![program screenshot](are-you-still-watching.PNG)


## Setup
This program runs in browser. There is no installation needed.

## Code Examples
        function youtubeAPI(input){
      $.ajax({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/search",
        data:{ 

          // Kyle's key AIzaSyBEvfU24tFTCbHE2Ua8dpDQPJ-sVD0A9Ko
          // Ian's key  AIzaSyB4F4I4IMaXS_dYV8OgCHKwex9j-rd5s3g
          // Melvin's key AIzaSyCgRDv-PRHPvXAN9yMAZWaSICDhRRfOuHs
          //              AIzaSyDa-yttRLO2DiuNCpPVRyROynAvdeDKALM

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

## Status
Project is in progress. Feel free to email us  with any suggestions or to report any bugs: ianmharris93@gmail.com/MELVIN'S EMAIL/KANE'S EMAIL/KYLE'S EMAIL



## Contact
Created by Kyle Berner, Kane Cruz-Walker, Melvin Cerrillo, and Ian Harris(https://github.com/iannm93) - ianmharris93@gmail.com - feel free to contact us!

