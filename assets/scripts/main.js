const $selection = document.querySelector(".selection")
const $profileSelections = $selection.querySelectorAll(".profile-selection")

const $profile = document.querySelector(".profile")
const $profileCards = $profile.querySelectorAll(".profile-card")

/* Loader */

const $loader = document.querySelector('.loadingScreen')
let loaded = false

window.addEventListener('load', (event) =>
{
    console.log(event)
    $loader.classList.add('loaded')
    loaded = true
})

/* end loader */


for (let i = 0; i < $profileSelections.length; i++) {
    const profile_selection = $profileSelections[i]
    const profile_card = $profileCards[i]
    profile_selection.addEventListener("mousedown", () => {
        for (let i = 0; i < $profileCards.length; i++) {
            $profileCards[i].classList.remove("active")
            $profileSelections[i].classList.remove("active")
        }
        profile_selection.classList.add("active")
        profile_card.classList.add("active")
    })
}


$(document).ready(function(){
    $('.sidenav').sidenav();
});

const OS = navigator.platform;

console.log(OS);