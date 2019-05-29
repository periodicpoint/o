const shrinkCells = async function(
    cells,
    {
      scalingFactor = 
      bloomAngle = -180
    } = {}
  ){
  
  const origin = {
    x: 0,
    y: 0,
  }

  for (let i = 1; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      const currentPoint = cells[i][j].phenotype.point
      const currentRadius = cells[i][j].phenotype.color

      const currentDistance = await calculateDistance(origin, currentPoint)
      const currentAngle = await calculateAngle(currentPoint)
      let angle =  currentAngle * (180/Math.PI)
      const newRadius = currentRadius*(scalingFactor/(i+1))
      const newDistance =
        Math.abs(currentDistance - Math.abs((currentRadius - newRadius)))

      const tempPoint = {
        x: origin.x + newDistance,
        y: origin.y
      }

      if (i % 2 == 0) {
        angle = -1*angle
      }

      const rotatedPoint = await rotate(
        {
          point: tempPoint,
          center: origin,
          angleInDegrees: angle
        }
      )      

      const newPoint = {
        x: rotatedPoint.rotatedX,
        y: rotatedPoint.rotatedY
      }

      cells[i][j].express({influence: true, color: newRadius, point: newPoint})
    }
  }
}