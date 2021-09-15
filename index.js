const BASE_URL_1 = 'https://thronesapi.com/api/v2/Characters'
const BASE_URL_2 = 'https://got-quotes.herokuapp.com/quotes'

function getCharacters() {
    fetch(BASE_URL_1)
    .then(resp => resp.json())
    .then(charArray => charArray.forEach(charObj => renderCharacters(charObj)))
    console.log(charObj)
    
}

function getQuotes() {
    fetch(BASE_URL_2)
    .then(resp => resp.json())
    .then(quotesArray => console.log(quotesArray))

}
getQuotes()

// Find final picture of Ice Kingdom w/ zombie hoard *done
// Paragraph about Ice Kingdom *done
// Background image of Dany (Kevin)
// Create 2 buttons/drop-downs, click events
// Drop downs for House Stark, Lannister, Targaryen, Greyjoy, Tyrell *done
// Implement random quote generator
// create submit form ( House name, Full name, title, nickname?)
// create alert when page loads
// Find images of house banners to populate with drop-down menu
// Click event for house images to display character images from selected house





function init() {
    getCharacters()
}
init()



