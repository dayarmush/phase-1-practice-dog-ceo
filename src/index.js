console.log('%c HI', 'color: firebrick')
//get the dog pics and add them to the dom 
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(resp => resp.json())
.then(data => data.message.forEach(renderImg))

//adds the dog images to the dom 
function renderImg(image) {
    const img = document.createElement('img')
    img.src = image
    const imgContainer = document.querySelector('#dog-image-container')
        imgContainer.appendChild(img)
}

// gets the dog breeds and appends them to the page
fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(breedData => {
    const breedUl = document.querySelector('#dog-breeds')
    for (let breed in breedData.message) {
        const breedLi = document.createElement('li')
        breedUl.appendChild(breedLi)
        breedLi.textContent = breed;
    }
    breedUl.addEventListener('click', e => {
        e.target.style.color = 'red'
        console.log(e.target)
    })
})