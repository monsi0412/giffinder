/*global $ */

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    function callGiphyAPIWithSearchTerm(searchTerm) {
    
        var i = Math.floor(Math.random() * (10 + 1));
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                var url = response.data[i].images.original.url;
                appendImageToBody(url);
            },
        });
          
    }
    

    function appendImageToBody(srcURL) {
        $('#results').append(`<img id='gif' src=  ${srcURL}  >`);
        $("h3").hide();
    }
    var searchTerm;
    $("input").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#search").click();
        }
    });
    $("#search").click(function() {
        searchTerm = $("input").val();
        callGiphyAPIWithSearchTerm(searchTerm);
        $("input").val("");
    });



    //random images

    function randomGiphyUrl() {

        var randomUrl = " https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";

        $.ajax({
            url: randomUrl,
            method: "GET",
            success: function(response) {
                console.log(response);
                var url = response.data.images.original.url;
                appendImageToBody(url);
            },
        });
    }
    $("#random").click(function() {
        randomGiphyUrl();
    });


    // click gif to hide


    $("#gif").click(function() {
        $("#gif").hide();
        alert("worked");
    });



});
