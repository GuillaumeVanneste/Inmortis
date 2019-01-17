const $selection = document.querySelector(".selection")
const $profileSelections = $selection.querySelectorAll(".profile-selection")

const $profile = document.querySelector(".profile")
const $profileCards = $profile.querySelectorAll(".profile-card")


console.log($profileSelections)
console.log($profileCards)

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