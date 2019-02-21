/*
const $selection = document.querySelector(".selection");
const $profileSelections = $selection.querySelectorAll(".profile-selection");
const $profile = document.querySelector(".profile");
const $profileCards = $profile.querySelectorAll(".profile-card");

for (let i = 0; i < $profileSelections.length; i++) {
    const profile_selection = $profileSelections[i];
    const profile_card = $profileCards[i];
    profile_selection.addEventListener("mousedown", () => {
        for (let i = 0; i < $profileCards.length; i++) {
            $profileCards[i].classList.remove("active");
            $profileSelections[i].classList.remove("active");
        }
        profile_selection.classList.add("active");
        profile_card.classList.add("active");
    })
}
*/

// SIDENAV
$(document).ready(function(){
    $('.sidenav').sidenav();
});


// SMOOTH SCROLL
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

/*
// Loader

const $loader = document.querySelector('.loadingScreen')
let loaded = false

window.addEventListener('load', (event) =>
{
    $loader.classList.add('loaded')
    loaded = true
})

// End loader
*/