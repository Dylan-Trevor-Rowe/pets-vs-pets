import print from './print.js'

export const selectFighterOne = (newFighterData) => {
  let domString = ""
  domString += ` 
      <select id="fighterOneSelect"class="form-select">
        ${newFighterData.map(fighterOne => `<option value="${fighterOne.id}">${fighterOne.name}</option>`)}    
      </select>`
  print.printToDom('selectOne', domString)
}

export const selectFighterTwo = (newFighterDataTwo) => {
  let domString = ""
  domString += ` 
      <select id="fighterTwoSelect"class="form-select">
        ${newFighterDataTwo.map(fighterTwo => `<option value="${fighterTwo.id}">${fighterTwo.name}</option>`)}    
      </select>`
  print.printToDom('selectTwo', domString)
}
export default { selectFighterOne, selectFighterTwo }