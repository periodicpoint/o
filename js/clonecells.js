const cloneCells = async function(cells){
  let clonedCells = []
  for (let i = 0; i < cells.length; i++) {
    let currentGenotype = {
      color: cells[i].genotype.color,
      point: {
        x: cells[i].genotype.point.x,
        y: cells[i].genotype.point.y
      }
    }
    let currentClonedCell = await createCells({
        genotype: currentGenotype
      })
    clonedCells.push(currentClonedCell[0])
  }  
  return clonedCells
}
