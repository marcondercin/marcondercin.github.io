//quote api from https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373/8

// import $ from "https://cdn.skypack.dev/jquery@3.6.0";

function randomIndex(min, max) {
  return (Math.floor(Math.random() * (max-min) + min));
}

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
    }

$(document).ready(function() {

    // Get quote from api and assign index, generate initial quote and author
    $.ajax(settings).done(function (response) {
        let quotes = JSON.parse(response);
        let index = randomIndex(0, quotes.length);
        $('#text').text(quotes[index].text);
        $('#author').text('- ' + quotes[index].author);

        // On button click...
        $('#new-quote').click(function() {
      
        // Change index
        let index = randomIndex(0, quotes.length);
      
        // Animate fade while changing text and author
        $('#text').animate({'opacity': 0}, 500, function() {
            $(this).text(quotes[index].text);
            }).animate({'opacity': 1}, 500);
        
        $('#author').animate({'opacity': 0}, 500, function() {
            $(this).text('- ' + quotes[index].author);
            }).animate({'opacity': 1}, 500);
        });
    });

    // tweet current quote
    $('#tweet-quote').click(function() {

    })

})