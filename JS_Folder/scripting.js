/* =================================================================== DESCRIPTION ========================================================================

This is the JS scripting file for 'index.html', 'getStarted.html', 'gallery.html' and 'films.html'.

The program uses jQuery commands and functions that:
    (a) Creates and appends a "Save For Later" button to images/articles/etc on the website, allowing users to save items to a personal folder.
    (b) Alerts the user when they save an item and tells the user how many items are in their Save For Later folder.
    (c) Creates forms to allow a user to “like/unlike” items on the website.
    (d) Creates and appends a drop-down select menu to Films.html's <div> with class: "dropDownList" in Favourites section.

Please see "saveForLaterScript.js" for description of saveForLater.html's functionality.
Please see 'References.txt' for the list of sources I used in this project.
===========================================================================================================================================================*/


// ================================================================ DECLARE VARIABLES ======================================================================

// Sets empty array variables for storing income and expenses objects.
let saveForLaterArray = []; 


//======================================================================= JQUERY ===========================================================================

$(document).ready(function() {
    // Set sessionStorage items "load" and "saveForLater" on page load.
    if (sessionStorage.getItem("load") === null) {
            sessionStorage.setItem("load", true);
            sessionStorage.setItem("saveForLater", JSON.stringify(saveForLaterArray));
    }


    // Create and append "Save For Later" button to elements with class: "card" and "saveForLater".
    let saveForLaterButton = document.createElement("button");
    saveForLaterButton.className = "saveForLaterButton btn btn-success mx-auto my-1";  
    saveForLaterButton.textContent = "Save";
    $(".card, .saveForLater").append(saveForLaterButton);


    // Create and append "Like" heart icon and anchors to form elements with class: "like".
    let likeButtonAnchor = document.createElement("a"); // Create new <a> element (for Like/Heart Button).
    likeButtonAnchor.className = "likeButton";
    let likeButtonIcon = document.createElement("i"); // Create new <i> element (for Like/Heart Icon).
    likeButtonIcon.className = "fa-solid fa-heart";
    likeButtonAnchor.ariaHidden = "true";
    likeButtonAnchor.appendChild(likeButtonIcon); // Append likeButtonIcon to likeButtonAnchor.
    $(".like").append(likeButtonAnchor); // Append likeButtonAnchor to forms with class: "like".


    // Toggle "Like" button anchor class and change color when clicked.
    $(".likeButton").click(function(){
        $(this).toggleClass("heart");
    });


    // Add click event function for "Save For Later" buttons that: 
    $(".saveForLaterButton").click(function(){
        let savedObject = $(this).parent()[0].innerHTML; // Creates var "savedObject" and sets value to index 0 of this <btn>'s parent element.
        saveForLaterArray = JSON.parse(sessionStorage.getItem("saveForLater")); // Parses (gets) sessionStorage item "saveForLater" to saveForLaterArray.
        saveForLaterArray.push(savedObject); // Pushes saved object to saveForLaterArray.
        sessionStorage.setItem("saveForLater", JSON.stringify(saveForLaterArray)); // Updates sessionStorage's "saveForLater" with objects in saveForLaterArray.
        let numberOfSavedItems = saveForLaterArray.length; //Gets number of items in saveForLaterArray.
        alert(`There are ${numberOfSavedItems} items are in your “Save for later” folder.`); // Alerts user to how many items are in "Save For Later" folder.
    });


    // Create and append drop-down select list to Films.html's <div> with class: "dropDownList".
    let favouriteFilmsSelection = document.createElement("select"); // Create new <select> element (for Like/Heart Button).
    favouriteFilmsSelection.className = "favouriteFilmsSelection";
    let firstFilm = document.createElement("option"); // Create new <option> element.
    firstFilm.textContent = "The Big Year"; // Set text content to film name.
    let secondFilm = document.createElement("option"); 
    secondFilm.textContent = "The Starling";
    let thirdFilm = document.createElement("option");
    thirdFilm.textContent = "Surf's Up";
    favouriteFilmsSelection.appendChild(firstFilm); // Append films to favouriteFilmsSelection.
    favouriteFilmsSelection.appendChild(secondFilm); 
    favouriteFilmsSelection.appendChild(thirdFilm); 
    $(".dropDownList").append(favouriteFilmsSelection); // Append favouriteFilmsSelection to <div> with class: "dropDownList".

});
