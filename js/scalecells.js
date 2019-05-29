const scaleCells = async function(cells, factor, shift){
  for (let i = 0; i < cells.length; i++) {
    const newColor = cells[i].phenotype.color*factor
    const newPoint = {
      x: (cells[i].phenotype.point.x*factor),
      y: (cells[i].phenotype.point.y*factor)
    }
    cells[i].express({influence: true, color: newColor, point: newPoint})
  }
}