import card from './fighterCard.js'

export const chosenFighters = (chosen) => {
  document.getElementById('fighterOneSelect').addEventListener('change', e => {
    const found = chosen.filter(val => val.id === parseInt(e.target.value))
    card.cardContainer(found)
    healthEventTwo(found)
  })
}

export const chosenFightersTwo = (chosenOne) => {
  document.getElementById('fighterTwoSelect').addEventListener('change', e => {
    const found = chosenOne.filter(val => val.id === parseInt(e.target.value))
    card.cardContainerTwo(found)
    healthEventOne(found)
  })
}

const healthEventOne = (arr) => {
  for (const i of arr) {
    document.getElementById(`fighterOne`).addEventListener('click', e => {
      console.log('works')
      if (i.health < 100) {
        i.health -= 10
      }
      card.cardContainerTwo(arr)
    })
  }
}

const healthEventTwo = (arr) => {
  for (const i of arr) {
    document.getElementById(`fighterTwo`).addEventListener('click', e => {
      console.log('works')
      if (i.health < 100) {
        i.health -= 10
      }
      card.cardContainer(arr)
    })
  }
}
export default { chosenFighters, chosenFightersTwo }
