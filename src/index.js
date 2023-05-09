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

// get the breeds and append them to the dom 
fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(breedData => {
    const breedUl = document.querySelector('#dog-breeds')
    for (let breed in breedData.message) {
        const breedLi = document.createElement('li')
        breedUl.appendChild(breedLi)
        breedLi.textContent = breed;
        breedLi.setAttribute('class', 'theBreeds')
    }

    // event listener to only display letters starting with the selected letter
    const dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', e => {
        const selectedLetter = e.target.value
        const breedLis = document.querySelectorAll('.theBreeds')
        
        breedLis.forEach(breedLi => {
            const breedText = breedLi.textContent
            if (breedText.charAt(0) === selectedLetter) {
                breedLi.style.display = 'block'
            } else {
                breedLi.style.display = 'none'
            }
        })
    })
})
