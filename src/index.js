const dogUrl = "http://localhost:3000/pups"
const dogBarDiv = document.getElementById('dog-bar');
const dogInfoDiv = document.getElementById('dog-info');


function getDogData() {
    fetch(dogUrl)
    .then(resp => resp.json())
    .then(function (data) {
        addToDogBar(data);
        renderDogInfo(data);
    })
}         
    
function addToDogBar(dogObj) {
    for (let dog of dogObj) {
        const span = document.createElement('span')
        span.id = `${dog.name}`;
        span.innerText = dog.name;
        dogBarDiv.append(span);
        
    }
}

function renderDogInfo(dogObj) {
    for (let dog of dogObj) {
    const dogInfoContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = dog.image;
        dogInfoContainer.append(img);
    let h2 = document.createElement('h2');
    h2.innerText = dog.name
        dogInfoContainer.append(h2);
    let button = document.createElement('button')
        if (dog.isGoodDog === 'true') {
            button.innerText = "Good Dog!"
        } else (button.innerText = "Bad Dog!")
        dogInfoContainer.append(button);
    dogInfoDiv.append(dogInfoContainer)
    }
}



function init() {
    getDogData();
    
}

init();