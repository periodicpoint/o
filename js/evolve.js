const evolve = async function(
    cellCreationFunction,
    cellCloneFunction,
    mutationFunction,
    populationFunction,
    ruleFunction,
    rule,
    cells,
    {
      counter = 1,
      wrap = false,
      random = false,
      min = 0,
      max = 1,
      maxNumberOfGenerations = 10
    } = {}
  ){
  
  //let k = 0
  //while (k<maxNumberOfGenerations) {
    //k++
    let clonedCells = await cellCloneFunction(cells)
    let generations = [clonedCells]

    for (let i = 0; i < counter; i++) {
      let currentGeneration = await cellCloneFunction(generations[i])
      let mutatedGeneration = await mutationFunction(
          ruleFunction,
          rule,
          currentGeneration,
          {
            wrap: wrap,
            random: random,
            min: min,
            max: max
          }
        )
      let nextGeneration = await populationFunction(
          cellCreationFunction,
          mutatedGeneration,
          {
            random: random,
            min: min,
            max: max
          }
        )
      generations.push(nextGeneration)
    }
    return generations
    //yield generations
  //}
}
