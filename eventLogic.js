import card from './fighterCard.js'

export const chosenFighters = (chosen) => {
    document.getElementById('fighterOneSelect').addEventListener('change', e => {
      const found = chosen.filter(val => val.id === parseInt(e.target.value))
      card.cardContainer(found)
    })
  }
  
 export const chosenFightersTwo = (chosenOne) => {
    document.getElementById('fighterTwoSelect').addEventListener('change', e => {
      const found = chosenOne.filter(val => val.id === parseInt(e.target.value))
      card.cardContainerTwo(found)
    }) 
  }
  export default { chosenFighters, chosenFightersTwo }
