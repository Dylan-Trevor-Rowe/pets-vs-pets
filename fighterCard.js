import print from './print.js'

export const cardContainer = (arr) => {
  let domString = ""
  for (const animals of arr) {
    domString += ` 
      <div class="card" style="width: 18rem;">
        <img src="${animals.img}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${animals.name}</h5>
          <div class="progress">
          <div style="width: ${animals.health}%"  id="progress-barOne" class="progress-bar progress-bar-striped
          bg-danger" role="progressbar" aria-valuenow="100"
          aria-valuemin="0" aria-valuemax="100" >
          </div>
            </div>
          </div>
          <p class="card-text">color: ${animals.color}</p> 
          <p class="card-text">breed: ${animals.breed}</p> 
          <p class="card-text">traits: ${animals.traits}</p>
          <div class="button_Container">
            <button type="button" id="fighterOne" class="btn btn-danger w-25 d-flex text-center
            align-self-center btn-sm">Attack!!!</button>
            <button type="button"  class="btn btn-primary w-25 d-flex text-center
            align-self-center btn-sm">Block!!!</button>
          </div
        </div>
      </div>`
  }
  print.printToDom('card_Container', domString)
}

export const cardContainerTwo = (animalArray) => {
  let domString = ""
  for (const animals of animalArray) {
  domString += ` 
      <div class="card" style="width: 18rem;">
        <img src="${animals.img}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${animals.name}</h5>
          <div class="progress">
            <div id="progress-barTwo" style="width: ${animals.health}%" 
              class="progress-bar progress-bar-striped
              bg-danger" role="progressbar" aria-valuenow="100"
              aria-valuemin="0" aria-valuemax="100" >
            </div>
          </div>
        </div>
        <p class="card-text">color: ${animals.color}</p> 
        <p class="card-text">breed: ${animals.breed}</p> 
        <p class="card-text">traits: ${animals.traits}</p>
        <div class="button_Container">
          <button type="button" id="fighterTwo" class="btn btn-danger w-25 d-flex text-center
          align-self-center btn-sm">Attack!!!</button>
          <button type="button" class="btn btn-primary w-25 d-flex text-center
          align-self-center btn-sm">Block!!!</button>
        </div
      </div>
    </div>`
  }
  print.printToDom('card_Container_Two', domString)
}

export default { cardContainer, cardContainerTwo }

