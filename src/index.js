const dogUrl = "http://localhost:3000/pups"
const dogBarDiv = document.getElementById('dog-bar');
const dogInfoDiv = document.getElementById('dog-info');


function getDogData() {
    fetch(dogUrl)
    .then(resp => resp.json())
    .then((data) => addToDogBar(data))
}         
    
function addToDogBar(dogObj) {
    for (let dog of dogObj) {
        const span = document.createElement('span')
        span.id = `${dog.name}`;
        span.innerText = dog.name;
        dogBarDiv.append(span);
        
    }
}

// function renderDogInfo(dogUrl) {
//     let img = document.createElement('img');
//     img.src = dogUrl.image;
//     let h2 = document.createElement('h2');
//     h2.innerText = dogUrl.name
//     let button = document.createElement('button')
//         if (dogUrl.isGoodDog === 'true') {
//             button.innerText = "Good Dog!"
//         } else (button.innerText = "Bad Dog!")
// }

function init() {
    getDogData();
    
}

init();