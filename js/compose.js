const compose = async function(
    sporeCreationFunction,
    cellCreationFunction,
    cellCloneFunction,
    mutationFunction,
    populationFunction,
    ruleFunction,
    rule,
    evolutionFunction,
    bloomFunction,
    applyGeometryFunction,
    geometryFunction,
    {
      preset = {
        sporeParameter: {
          base: 2,
          root: 1
        },
        cellParameter: {
          random: false,
          min: 0,
          max: 1,
          repetitions: 1,
          genotypePattern: [
            {
              color: 0,
              point: {
                x: 0,
                y: 0
              }
            },
            {
              color: 0,
              point: {
                x: 0,
                y: 0
              }
            },
            {
              color: 0,
              point: {
                x: 0,
                y: 0
              }
            }
          ]
        },
        evolutionParameter: {
          counter: 10,
          wrap: false,
          random: false,
          min: 0,
          max: 1
        }
      }
    } = {}
  ){
  // create spore
  const spore = await sporeCreationFunction(
    {
      sporeBase: preset.sporeParameter.base,
      sporeRoot: preset.sporeParameter.root
    }
  )
  //spore.mutate({color: 1})
  
  // create mother cell
  const motherCell = new Cell()

  // create background pattern
  const backgroundPattern = await cellCreationFunction()

  // create first generation
  let firstGeneration = await cellCreationFunction(
    {
      random: preset.cellParameter.random,
      min: preset.cellParameter.min,
      max: preset.cellParameter.max,
      repetitions: preset.cellParameter.repetitions,
      genotypePattern: preset.cellParameter.genotypePattern
    }
  )  
  
  //firstGeneration[2].mutate({color:1})
  //console.log(firstGeneration[2].genotype.color)


  // evolve
  let generations = await evolutionFunction(
    cellCreationFunction,
    cellCloneFunction,
    mutationFunction,
    populationFunction,
    ruleFunction,
    rule,
    firstGeneration,
    {
      counter: preset.evolutionParameter.counter,
      wrap: preset.evolutionParameter.wrap,
      random: preset.evolutionParameter.random,
      min: preset.evolutionParameter.min,
      max: preset.evolutionParameter.max
    }
  )

  // bloom
  let bloomedGenerations = await bloomFunction(
    applyGeometryFunction,
    geometryFunction,
    {
      generations: generations,
      spore: spore
    }
  )
  return bloomedGenerations
}