const printToDom = (divId, textToPrint) => {
  let selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const fighters = [
  {
    id: 1,
    name: 'Ozzy',
    breed: 'Conure',
    traits: 'very stinky',
    color: 'green',
    img: 'https://i.pinimg.com/originals/f0/1e/7a/f01e7a3e5df431929d27bc2a447b513e.jpg',
    health: 25 + "%"
  },
  {
    id: 2,
    name: 'Curly Jefferson',
    breed: 'shitZoop',
    traits: 'smells of meat',
    color: 'tan ? maybe?',
    img: 'data:image/jpeg;base64,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',
    health: 50 + "%"
  },
]

const selectFighterOne = (arr) => {
  let domString = ""
  domString += ` 
    <select id="fighterOneSelect"class="form-select">
      ${arr.map(fighterOne => `<option value="${fighterOne.id}">${fighterOne.name}</option>`)}    
    </select>`
  printToDom('selectOne', domString)
}
selectFighterOne(fighters)

const selectFighterTwo = (array) => {
  let domString = ""
  domString += ` 
    <select id="fighterTwoSelect"class="form-select">
      ${array.map(fighterTwo => `<option value="${fighterTwo.id}">${fighterTwo.name}</option>`)}    
    </select>`
  printToDom('selectTwo', domString)
}
selectFighterTwo(fighters)

const cardContainer = (arr) => {
  let domString = ""
  for (const animals of arr) {
    console.log(animals.health)
    domString += ` 
    <div class="card" style="width: 18rem;">
      <img src="${animals.img}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${animals.name}</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" 
            role="progressbar" aria-valuenow="10" aria-valuemin="0" 
            aria-valuemax="100" style="width: ${animals.health}" >
            </div>
          </div>
        </div>
        <p class="card-text">color: ${animals.color}</p> 
        <p class="card-text">breed: ${animals.breed}</p> 
        <p class="card-text">traits: ${animals.traits}</p>
        <div class="button_Container">
          <button type="button" id="${animals.id}" class="btn btn-danger w-25 d-flex text-center
          align-self-center btn-sm">Attack!!!</button>
          <button type="button" id="${animals.id}" class="btn btn-primary w-25 d-flex text-center
          align-self-center btn-sm">Block!!!</button>
        </div
      </div>
    </div>`
  }
  printToDom('card_Container', domString)
}

const cardContainerTwo = (animalArray) => {
  let domString = ""
  for (const animals of animalArray) {
    domString += ` 
    <div class="card" style="width: 18rem;">
      <img src="${animals.img}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${animals.name}</h5>
        <div class="progress">
          <div class="progress-bar progress-bar-striped
            bg-danger" role="progressbar"
            style="width: ${animals.health}" aria-valuenow="100"
            aria-valuemin="0" aria-valuemax="100">
          </div>
        </div>
      </div>
      <p class="card-text">color: ${animals.color}</p> 
      <p class="card-text">breed: ${animals.breed}</p> 
      <p class="card-text">traits: ${animals.traits}</p>
      <div class="button_Container">
        <button type="button" id="attackTwo" class="btn btn-danger w-25 d-flex text-center
        align-self-center btn-sm">Attack!!!</button>
        <button type="button" class="btn btn-primary w-25 d-flex text-center
        align-self-center btn-sm">Block!!!</button>
      </div
    </div>
  </div>`
  }
  printToDom('card_Container_Two', domString)

}

const chosenFighters = (chosen) => {
  document.getElementById('fighterOneSelect').addEventListener('change', e => {
    const found = chosen.filter(val => val.id === parseInt(e.target.value))
    cardContainer(found)
    addFightEventPlayerOne(found)
  })
}
chosenFighters(fighters)

const chosenFightersTwo = (chosenOne) => {
  document.getElementById('fighterTwoSelect').addEventListener('change', e => {
    const found = chosenOne.filter(val => val.id === parseInt(e.target.value))
    cardContainerTwo(found)
    // takes filtered animal you selected
    // adds click event
  })
}
chosenFightersTwo(fighters)

const addFightEventPlayerOne = (arrayOfFighters) => {
  let counter = 0
  for (const animals of arrayOfFighters) {
    document.getElementById(`${animals.id}`).addEventListener('click', (e) => {
        console.log(counter++, parseInt(e.target.id)) 
    });
  }
}





