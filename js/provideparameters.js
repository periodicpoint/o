const provideParameters = async function(
    {
      numberOfCells =  10,
      evolveOn = false,
      wrapOn = false,
      randomOn = false,
      randomMin = 0,
      randomMax = 1,
      origin = {
        x: 0,
        y: 0
      },
      base = 0.5,
      baseRadius = 0.7,
      scalingFactor = 0.99,
      generations = [[]],
      patternRepetitions = 1,
      genotypePattern = [1, 0, 1],
      genotypePatternOn = true,
      bloomAngle = -180,
      maxNumberOfGenerations = 10
    } = {}
  ){

  return {
    numberOfCells,
    maxNumberOfGenerations,
    evolveOn,
    wrapOn,
    randomOn,
    randomMin,
    randomMax,
    origin,
    base,
    baseRadius,
    scalingFactor,
    generations,
    patternRepetitions,
    genotypePattern,
    genotypePatternOn,
    bloomAngle,
    maxNumberOfGenerations
  }
}