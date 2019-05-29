const createCells = async function(
    {
      random = false,
      genotypePatternOn = false,
      min = 0,
      max = 1,
      repetitions = 1,
      genotypePattern = [1, 0, 1],
      genotype = {
        color: 0,
        point: {
          x: 0,
          y: 0
        }
      }
    } = {}
  ){
  
  let arrayOfCells = []
  const genotypes = []

  if (genotypePatternOn) {
    for (let i = 0; i < genotypePattern.length; i++) {
      const currentGenotype = {
        color: genotypePattern[i],
        point: {
          x: 0,
          y: 0
        }
      }
      genotypes.push(currentGenotype)
    }
  } else {
    genotypes.push(genotype)
  }

  if (random) {
    for (let i = 0; i < repetitions; i++) {
      let nextCell = new Cell()
      nextCell.mutate({random: random, min: min, max: max})
      arrayOfCells.push(nextCell)
    }
  } else {
    for (let i = 0; i < repetitions; i++) {
      for (let j = 0; j < genotypes.length; j++) {
        let nextCell = new Cell({genotype: genotypes[j]})        
        arrayOfCells.push(nextCell)
      }
    }
  }
  return arrayOfCells
}
