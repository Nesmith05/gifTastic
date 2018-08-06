///////////////////


// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
var topics = ["elephant", "red panda", "cheetah", "wolf", "seals", "panda", "polar bear", "otter", "owl", "monkey"];
//Creating a function to create buttons and display w/e
function gifButtons() {
    //deletes teh movie buttons prior to adding new ones 0 we may not need this
    $("#button-holder").empty();
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("animal-topics");
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#button-holder").append(btn);
        console.log(topics[i]);
    }
}
$("#Submit").on("click", function() {
    //this will grab the text input
    var input = $("#search").val().trim();
    //will push into the array whenever we search
    topics.push(input);


    //will then make new buttons
    gifButtons();
    displayGifs();

});

function displayGifs () {
    // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=239XYxcoeZPvRKflEYtELjKSjGwCxBtk&limit=10";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=9&api_key=dc6zaTOxFJmzC";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then (function(response) {
        console.log(response.data);
        var results = response.data;
        for (var i = 0; i < results.length; i++ ) {
            var gifdiv = $("<div class=animal-gifs>");
            var showGifs = $("<img>");
                showGif.attr('src', results[i].images.fixed_height_still.url);
                // shows the rating on hover
                showGif.attr('title', "Rating: " + results[i].rating);
                showGif.attr('data-still', results[i].images.fixed_height_still.url);
                showGif.attr('data-state', 'still');
                showGif.addClass('gif');
                showGif.attr('data-animate', results[i].images.fixed_height.url);
            gifdiv.append(showGifs);

            $("#gif-display").prepend(gifdiv);
        }
    })

}


// $("#gif-display").on("click", function(event) {
//     event.preventDefault();
//     // var gifSearch = $("")
//     var gifSearch = $("#search").val().trim();
//     topics.push(gifSearch);
//     gifButtons();
// })

// gifButtons();

// $(".Submit").on("click", function (){
//     //grab text from search bar
//     var gifSearch = $("#search").val().trim();
//     topics.push(topics);

//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&limit=10&api_key=UpSkPB4Zze3BVaTT0JrldyOWnimhP6Kp";



//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//     .then(function(response) {
//         console.log(response);
//         for (var i = 0; i < topics.length; i++) {
//             console.log(topics);
//             //create new button for the array
//             var button = $("<button>");
//             //add a new attribute to link to the HTML
//             button.attr("animal", topics[i]);
//             button.text(topics[i]);
//             button.addClass("animals-btn");
//             $("#button-holder").append(button);
//         };
//         $(".animals-btn").on("click", function (){
//             alert(topics);
//         })
//     });
// })
// function for displaying show gifs
$(document).on("click", ".show", displayGifs);
gifButtons();