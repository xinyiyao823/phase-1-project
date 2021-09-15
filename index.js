const BASE_URL_1 = 'https://thronesapi.com/api/v2/Characters'
const BASE_URL_2 = 'https://got-quotes.herokuapp.com/quotes'
let houseNames = [];

function getCharacters() {
    fetch(BASE_URL_1)
    .then(resp => resp.json())
    .then(charArray => charArray.forEach(function(charObj) {
        houseNames.push(charObj.family) //populate array with house names
    }))
    
}
getCharacters()
const houseArray = houseNames;
console.log(houseArray)




const dropDown1 = document.getElementById('house-list-1')
dropDown1.addEventListener('change', sortHouses1)

function sortHouses1(e) {
    let lastName = e.target.value // stark, lannister, targaryen, greyjoy, tyrell
    let result = houseArray.filter(house => house === lastName)
    
        const list = document.createElement('li')
        list.innerHTML = result
        document.querySelector('div').append(list)

    
}

const dropDown2 = document.getElementById('house-list-2')
dropDown2.addEventListener('change', sortHouses2)

function sortHouses2(e) {
    let lastName = e.target.value // stark, lannister, targaryen, greyjoy, tyrell
    console.log(lastName)
    let result = houseArray.filter(house => house === lastName)
    console.log(result)
    
        const list = document.createElement('li')
        list.innerHTML = result
        document.querySelector('div').append(list)

    
}

function getQuotes() {
    fetch(BASE_URL_2)
    .then(resp => resp.json())
   // .then(quotesArray => console.log(quotesArray))

}
getQuotes()















// Put "Choose House 1 or 2 next to the drop down menu"
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





// function init() {
//     getCharacters()
// }
// init()



