const BASE_URL_1 = "https://thronesapi.com/api/v2/Characters"

const imgDiv = document.getElementById('img-div')
let fetchObj = []

function getCharacters() {
    fetch(BASE_URL_1)
    .then(resp => resp.json())
    .then(charArray =>  {
        fetchObj = charArray; 
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
const imgTag2 = document.getElementById('second-selection')
imgTag2.addEventListener('click', renderImgInfo2)  

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
            charImg.src = image
            imgDiv.append(charImg)
        }

    } else if (img1 === 'file:///Users/xinyiyao/phase-1-project/images/stark.png') { //stark photo
        let arr = fetchObj.filter(member => member.family === 'House Stark')
        let imgArray = []
        arr.forEach(picture => imgArray.push(picture.imageUrl)) //imgArray has URLs of people who match
        for (const image of imgArray) {
            let charImg = document.createElement('img')
            charImg.src = image
            imgDiv.append(charImg)
        }

    } else if (img1 === 'file:///Users/xinyiyao/phase-1-project/images/targaryen.png') {
        let arr = fetchObj.filter(member => (member.family === 'House Targaryen') || (member.family === 'Targaryan'))
        let imgArray = []
        arr.forEach(picture => imgArray.push(picture.imageUrl)) //imgArray has URLs of people who match
        for (const image of imgArray) {
            let charImg = document.createElement('img')
            charImg.src = image
            imgDiv.append(charImg)
        }
    } else if (img1 === 'file:///Users/xinyiyao/phase-1-project/images/greyjoy.png') {
        let arr = fetchObj.filter(member => (member.family === 'House Greyjoy') || (member.family === 'Greyjoy'))
        let imgArray = []
        arr.forEach(picture => imgArray.push(picture.imageUrl)) //imgArray has URLs of people who match
        for (const image of imgArray) {
            let charImg = document.createElement('img')
            charImg.src = image
            imgDiv.append(charImg)
        }

    }
}


function renderImgInfo2(e) {
    const img1 = document.getElementById('first-selection').src
    const img2 = document.getElementById('second-selection').src
    const imgDiv = document.getElementById('character-img-container')
 

    if (img2 === 'file:///Users/xinyiyao/phase-1-project/images/lannister.png') { //lannister photo
        let arr = fetchObj.filter(member => (member.family === 'House Lannister') || (member.family ==='House Lanister'))
        let imgArray = []
        arr.forEach(picture => imgArray.push(picture.imageUrl)) //imgArray has URLs of people who match
        for (const image of imgArray) {
            let charImg = document.createElement('img')
            charImg.src = image
            imgDiv.append(charImg)
        }

    } else if (img2 === 'file:///Users/xinyiyao/phase-1-project/images/stark.png') { //stark photo
        let arr = fetchObj.filter(member => member.family === 'House Stark')
        let imgArray = []
        arr.forEach(picture => imgArray.push(picture.imageUrl)) //imgArray has URLs of people who match
        for (const image of imgArray) {
            let charImg = document.createElement('img')
            charImg.src = image
            imgDiv.append(charImg)
        }

    } else if (img2 === 'file:///Users/xinyiyao/phase-1-project/images/targaryen.png') {
        let arr = fetchObj.filter(member => (member.family === 'House Targaryen') || (member.family === 'Targaryan'))
        let imgArray = []
        arr.forEach(picture => imgArray.push(picture.imageUrl)) //imgArray has URLs of people who match
        for (const image of imgArray) {
            let charImg = document.createElement('img')
            charImg.src = image
            imgDiv.append(charImg)
        }
    } else if (img2 === 'file:///Users/xinyiyao/phase-1-project/images/greyjoy.png') {
        let arr = fetchObj.filter(member => (member.family === 'House Greyjoy') || (member.family === 'Greyjoy'))
        let imgArray = []
        arr.forEach(picture => imgArray.push(picture.imageUrl)) //imgArray has URLs of people who match
        for (const image of imgArray) {
            let charImg = document.createElement('img')
            charImg.src = image
            imgDiv.append(charImg)
        }

    }
}



// Submit form to create your own character
const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputCard = document.createElement('h2')

    let houseNameInput = e.target.name.value
    let charNameInput = e.target.charName.value
    let charTitleInput = e.target.charTitle.value
    let newChar = charTitleInput + ' ' + charNameInput + ' of House ' + houseNameInput
    inputCard.append(newChar)

    const div = document.getElementById('render-new-char')
    div.append(inputCard)
    

    e.target.reset()
})










