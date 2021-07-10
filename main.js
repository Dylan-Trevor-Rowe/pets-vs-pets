import data from './fighterData.js'
import select from './fightersSelects.js'
import chosen from './eventLogic.js'

const newFighterData = data.fighterOne()

const newFighterDataTwo = data.fighterTwo()

const init = () => {
    select.selectFighterOne(newFighterData)
    select.selectFighterTwo(newFighterDataTwo)
    chosen.chosenFighters(newFighterData)
    chosen.chosenFightersTwo(newFighterDataTwo)
}
init()

