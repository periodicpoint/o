const bloom = async function(
    applyGeometryFunction,
    firstGeometryFunction,
    secondGeometryFunction,
    {
      generations = [[]],
      bloomRadius = 0.5,
    } = {}
  ){
  
  let currentRadius = bloomRadius

  for (let i = 0; i < generations.length; i++) {
    for (let j = 0; j < generations[i].length; j++) {
      if (generations[i][j].genotype.color == 1) {
        const newPhenotype = await applyGeometryFunction(
          firstGeometryFunction,
          {
            counter: j,
            radius: currentRadius
          }
        )
        generations[i][j].express(
          {
            influence: true,
            color: newPhenotype.color,
            point: newPhenotype.point
          }
        )
      } else {
        const newPhenotype = await applyGeometryFunction(
          secondGeometryFunction,
          {
            counter: j,
            radius: currentRadius
          }
        )
        generations[i][j].express(
          {
            influence: true,
            color: newPhenotype.color,
            point: newPhenotype.point
          }
        )
      }
    }
  }

  return generations
}