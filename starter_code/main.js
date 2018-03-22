//user enters in city name/abbreviation
//the user then hits the update button or enter key
//background will then change to picture of that city upon submission 
//added a drop down in the html for names of cities available as well for easier choices for what cities exist
//users can still search by additional names but city name only added to drop down to easy access







$(document).ready(function () {
    function changeBackground(input) {
        //convert to all lowercase for the input to make more user friendly and not look for exact capitalization etc
        input = input.toLowerCase();


//NYC options
        if (input === "new york" || input === "new york city" || input === "nyc") {
            $("body").css("background-image", "url(images/nyc.jpg)");
             
            // San Francisco options
        } else if (input === "san francisco" || input === "sf" || input == "bay area") {
            $("body").css("background-image", "url(images/sf.jpg)");
            //LA options
        } else if (input === "los angeles" || input === "la" || input === "lax") {
            $("body").css("background-image", "url(images/la.jpg)");

            //austin tx options
        } else if (input === "austin" || input === "atx") {
            $("body").css("background-image", "url(images/austin.jpg)");
            //sydney options
        } else if (input === "sydney" || input === "syd") {
            $("body").css("background-image", "url(images/sydney.jpg)");
        }
            $("#city-type").val("");
    }
    //submit 
    $("form").on("submit",
        function (event) {
            event.preventDefault();
            changeBackground($('#city-type').val());
        }
    );
    // on click
    $("#submit-btn").on("click", function (event) {
        changeBackground($('#city-type').val());
    });
});