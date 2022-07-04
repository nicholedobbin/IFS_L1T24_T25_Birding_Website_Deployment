/* =================================================================== DESCRIPTION ========================================================================

This is the JS scripting file for 'saveForLater.html'.

The program uses jQuery commands and functions that:
    (a) Retrieves and displays Saved Items from the website in a personal folder.
    (b) Adds functionality to "Like" button (heart icon) on Saved Items, allowing users to like/unlike items on the website.
    (c) Adds functionality to a form which allows a user to leave comments (created in saveForLater.html) . 
    (d) Adds functionality to a form for if a person would like to contact the website (created in saveForLater.html).
    (e) Hides and shows an image when the hide/show buttons are clicked.
    (f) Uses a chained effect to animate a paragraph, allowing users to move the parapgraph and change its background colours by pressing arrow keys.

Please see "saveForLaterScript.js" for description of saveForLater.html's functionality.
Please see 'References.txt' for the list of sources I used in this project.
===========================================================================================================================================================*/

$(document).ready(function() {
    //Declare Variables:
    let savedItemsArray = JSON.parse(sessionStorage.getItem("saveForLater")); // Set savedItemsArray to sessionStorage's item saveForLater.
    let savedItemsSection = document.getElementById("savedItemsSection"); // Set savedItemsSection to saveForLater's <div> element with id: "savedItemsSection".
    

    // Add Saved Items from sessionStorage to SaveForLater.html display:
    for (i=0; i<savedItemsArray.length; i++) {
        let savedItem = document.createElement("div"); // Create new <div> element (for each savedItem).
        savedItem.id = "savedItem";
        savedItem.className = "col-sm-12 text-center";
        savedItem.innerHTML = savedItemsArray[i]; // Set savedItem's innerHTML to index [i] of savedItemsArray
        savedItemsSection.appendChild(savedItem); // Append savedItem to savedItemsSection.
        $(".saveForLaterButton").remove(); // Remove all "Save" buttons from SaveForLater.html.
    }


    // Toggle "Like" button anchor class and change color when clicked.
    $(".likeButton").click(function(){
        $(this).toggleClass("heart");
    });
    

    //Function for "Leave A Comment" form in SaveForLater.html, which alerts user when comment is submitted.
    $(".leaveCommentFormButton").click(function(){
        alert("Thank you for your comment.");
    });


    //Function for "Contact Us" form in SaveForLater.html, which alerts user when contact information is submitted.
    $(".contactUsFormButton").click(function(){
        alert("Thank you for contacting us, we'll get back to you shortly.");
    });


    // Fades out image when fadeOutButton is clicked in "Try This" section.
    $(".fadeOutButton").click(function(){
        console.log($("#fadingImage"));
        $(".fadingImage").hide();
    });
    

    // Fades in image when fadeOutButton is clicked in "Try This" section.
    $(".fadeInButton").click(function(){
        console.log($("#fadingImage"));
        $(".fadingImage").show();
    });
    

    // Function for animating paragraph in "Try This" section (use arrow keys to move and change colour of <p> element).
    $(document).keydown(function(key) {
        switch (parseInt(key.which, 10)) {
            // When Left arrow key is pressed.
            case 37:
                $(".movingParagraph").css("background-color","#F88379").animate({ left: "-=20px" }, 'fast');
                break;
                // When Up arrow key is pressed.
            case 38:
                $(".movingParagraph").css("background-color","#96DED1").animate({  top: "-=20px" }, 'fast');
                break;
                // When Right arrow key is pressed.
            case 39:
                $(".movingParagraph").css("background-color","#EADDCA").animate({ left: "+=20px" }, 'fast');
                break;
                // When Down arrow key is pressed.
            case 40:
                $(".movingParagraph").css("background-color","#7393B3").animate({ top: "+=20px" }, 'fast');
                break;
        }
    });
});


