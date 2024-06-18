

// SlideShow Carousel
document.addEventListener("DOMContentLoaded", function() {

    // Select all slideShow images
    const slides = document.querySelectorAll(".slides img");
    let slideIndex = 0;
    let intervalId = null; // Interval ID for automatic slide change

    // Initialize slider
    initializeSlider();

    function initializeSlider() {
        if (slides.length > 0) {
            slides[slideIndex].classList.add("displaySlide");
            intervalId = setInterval(nextSlide, 4000); // automatically switches slides every 4 seconds
        }
    }


    // Function to show a specific slide based on the index
    function showSlide(index) {

        // If the index is out of bounds, wrap around back to index 0
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) { // Show next slide if there are more
            slideIndex = slides.length - 1;
        }

        // Remove the display class from all slides
        slides.forEach(slide => {
            slide.classList.remove("displaySlide");
        });

        // Add the display class to the current slide
        slides[slideIndex].classList.add("displaySlide");
    }

    // Handles previous slide buttons, shows previous slide
    function prevSlide() {
        // Resets automatic timer for a smoother transition
        clearInterval(intervalId);
        slideIndex--;
        showSlide(slideIndex);

        // Restarts the interval for automatic slide change
        intervalId = setInterval(nextSlide, 4000);
    }

    // handles next slide button, shows next slide
    function nextSlide() {
        // Resets automatic timer for a smoother transition
        clearInterval(intervalId);
        slideIndex++;
        showSlide(slideIndex);

        // Restarts the interval for automatic slide change
        intervalId = setInterval(nextSlide, 4000);
    }

    // Handles button events, if user presses slide buttons, call respective methods
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
});


// Word Counter, Counts words in 'Publish Story' Textbox
document.addEventListener('DOMContentLoaded', function(event) {
    var storyInput = document.getElementById('storyInput');
    var wordCountDisplay = document.getElementById('wordCount');

    // Checks if user has inputted anything into textbox, if so call method
    if (storyInput) {
        storyInput.addEventListener('input', updateWordCount);
    }
    
    // Calculates Word counts and updates Word Count display appropriately
    function updateWordCount() {
        var input = storyInput.value;
        var words = input.trim().split(/\s+/);
        let wordCount = words.length - 1;

        // Replaces default 0 word/current word count with new word count
        wordCountDisplay.innerText = wordCount + " Words";
    }
});



// Validates User email input in "Publish Story" email input box
document.addEventListener('DOMContentLoaded', function(event) {

    // Obtains User email
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');

    // Checks if User email is not null, if so, validate it
    if (emailInput) {
        storyForm.addEventListener('submit', function(event) {

            // If email is null, prevents the form from being submitted
            if (!updateErrorMessage()) { 
                event.preventDefault();
            }
        });
    }

    // Validates email by comparing it to Regex
    function validateEmail(email) {

        // email must have (text) + @ + (text)
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // returns boolean determining if email passes test
        return emailRegex.test(String(email).toLowerCase());
    }


    // Updates error message accordingly if email is valid
    function updateErrorMessage() {
        var email = emailInput.value;

        // Verifies if email passes RegEx, 
        if (!validateEmail(email)) {
            emailError.textContent = 'Invalid email address';
            return false;
        } else {
            emailError.textContent = ''; // if email is valid, return with no error message
        }
        return true;
    }
});




// Handles Local Storage if User decides to "Save As Draft"/"Load Draft" in "Publish Story"
document.addEventListener('DOMContentLoaded', function() {

    // If user clicks either "Save As Draft" or "Load Draft", call respective method
    document.getElementById("saveDraftButton").addEventListener("click", saveDraft);
    document.getElementById("loadDraftButton").addEventListener("click", loadDraft);

    // Obtain all "Publish Story" values and record them in Local Storage
    function saveDraft() {

        // Obtain all input values
        const title = document.getElementById('titleInput').value;
        const email = document.getElementById('email').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;
        const story = document.getElementById('storyInput').value;
    
        // Store values in a dictionary
        const savedDraft = {
            title: title,
            email: email,
            author: author,
            genre: genre,
            story: story,
        };
    
        // Store data in the web browser's localStorage 
        localStorage.setItem('savedDraft', JSON.stringify(savedDraft));

        // After storage, return to where User left off
        loadDraft()
    }

    // Handles the loading of all saved Data in Local Storage
    function loadDraft() {

        // Retrieves Data from web browser's local storage
        const savedDraft = JSON.parse(localStorage.getItem('savedDraft'));
    
        // Place saved data into their respective input boxes
        if (savedDraft) {
            document.getElementById('titleInput').value = savedDraft.title;
            document.getElementById('email').value = savedDraft.email;
            document.getElementById('author').value = savedDraft.author;
            document.getElementById('genre').value = savedDraft.genre;
            document.getElementById('storyInput').value = savedDraft.story;
        }
    }
});


// Get all elements with the class name "accordion"
var accordians = document.getElementsByClassName("accordion");

// Loop through each accordian 
for (var accordian = 0; accordian < accordians.length; accordian++) {

    // Add a click event listener to each accordion
    accordians[accordian].addEventListener("click", function() {

        // Retrieves the next element after the current accordian i.e. the block of text
        var panel = this.nextElementSibling;

        // Handles the collapse and expansion of panels (blocks of text)
        if (panel.style.maxHeight) { // If the panel has maxHeight i.e expanded, collapse it
            panel.style.maxHeight = null;
        } else { // if the panel does not have maxHeight i.e. collapsed, expand it
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
  });
}










