const BASE_URL_1 = "http://localhost:3000/characters"
const BASE_URL_2 = 'https://got-quotes.herokuapp.com/quotes'
const imgDiv = document.getElementById('img-div')
let fetchObj = []

function getCharacters() {
    fetch(BASE_URL_1)
    .then(resp => resp.json())
    .then(charArray =>  {
        fetchObj = charArray;
        console.log(fetchObj)
    })
    
}
getCharacters()




// Dropdown #1
const dropDown1 = document.getElementById('house-list-1')
dropDown1.addEventListener('change', getImage1)


function getImage1(e) {
    let lastName = e.target.value // stark, lannister, targaryen, greyjoy
    if (lastName === 'House Stark') {
        const starkImg = document.getElementById('first-selection')
        starkImg.src = 'images/stark.png'
        imgDiv.append(starkImg)
    } else if (lastName === 'House Lannister') {
        const lannisterImg = document.getElementById('first-selection')
        lannisterImg.src = 'images/lannister.png'
        imgDiv.append(lannisterImg)
    } else if (lastName === 'House Targaryen') {
        const targaryenImg = document.getElementById('first-selection')
        targaryenImg.src = 'images/targaryen.png'
        imgDiv.append(targaryenImg)
    } else if (lastName === 'House Greyjoy') {
        const greyjoyImg = document.getElementById('first-selection')
        greyjoyImg.src = 'images/greyjoy.png'
        imgDiv.append(greyjoyImg)
    }
 
}

// Dropdown #2

const dropDown2 = document.getElementById('house-list-2')
dropDown2.addEventListener('change', getImage2)

function getImage2(e) {
    let lastName = e.target.value // stark, lannister, targaryen, greyjoy
    if (lastName === 'House Stark') {
        const starkImg = document.getElementById('second-selection')
        starkImg.src = 'images/stark.png'
        imgDiv.append(starkImg)
    } else if (lastName === 'House Lannister') {
        const lannisterImg = document.getElementById('second-selection')
        lannisterImg.src = 'images/lannister.png'
        imgDiv.append(lannisterImg)
    } else if (lastName === 'House Targaryen') {
        const targaryenImg = document.getElementById('second-selection')
        targaryenImg.src = 'images/targaryen.png'
        imgDiv.append(targaryenImg)
    } else if (lastName === 'House Greyjoy') {
        const greyjoyImg = document.getElementById('second-selection')
        greyjoyImg.src = 'images/greyjoy.png'
        imgDiv.append(greyjoyImg)
    }
}

// Click event for House 1 Img
const imgTag1 = document.getElementById('first-selection')
imgTag1.addEventListener('click', renderImgInfo1) 

function renderImgInfo1(e) {
    const img1 = document.getElementById('first-selection').src
    const img2 = document.getElementById('second-selection').src
    const imgDiv = document.getElementById('character-img-container')
    

    if (img1 === 'file:///Users/xinyiyao/phase-1-project/images/lannister.png') { //lannister photo
        let arr = fetchObj.filter(member => (member.family === 'House Lannister') || (member.family ==='House Lanister'))
        let imgArray = []
        arr.forEach(picture => imgArray.push(picture.imageUrl)) //imgArray has URLs of people who match
        
        for (const image of imgArray) {
            
            let charImg = document.createElement('img')
            charImg.src = imgArray
            imgDiv.append(charImg)

        }

    } else if (img1 === 'file:///Users/xinyiyao/phase-1-project/images/stark.png') { //stark photo

    } else if (img1 === 'file:///Users/xinyiyao/phase-1-project/images/targaryen.png') {

    } else if (img1 === 'file:///Users/xinyiyao/phase-1-project/images/greyjoy.png') {

}
}

// const familyMemberCollection = document.createElement('div')

// const familyMember = document.createElement('img')
// familyMember.src = charObj.url




// function getQuotes() {
//     fetch(BASE_URL_2)
//     .then(resp => resp.json())
//    // .then(quotesArray => console.log(quotesArray))

// }
// getQuotes()















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



