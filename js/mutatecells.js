const mutateCells = async function (ruleFunction, rule, cells, options = {}) {
  const {
    wrap = false,
    random = false,
    min = 0,
    max = 1
  } = options
  
  let newCells = [...cells]  
  if (wrap) {
    let tempFirstCell = newCells[newCells.length-1]
    let tempLastCell = newCells[0]
    newCells.unshift(tempFirstCell)
    newCells.push(tempLastCell)

    for (let i = 1; i <= newCells.length-2; i++) {
      let currentCells = [
        newCells[i-1],
        newCells[i],
        newCells[i+1]
      ]
      let newGenotypeColor = await ruleFunction(rule, currentCells)
      newCells[i].mutate({
        color: newGenotypeColor,
        random: random,
        min: min,
        max: max
      })
    }
    newCells.shift()
    newCells.pop()
  } else {
    for (let i = 1; i <= newCells.length-2; i++) {
      let currentCells = [
        newCells[i-1],
        newCells[i],
        newCells[i+1]
      ]      
      let newGenotypeColor = await ruleFunction(rule, currentCells)
      newCells[i].mutate({
        color: newGenotypeColor,
        random: random,
        min: min,
        max: max
      })
    }
  }
  return newCells
}
