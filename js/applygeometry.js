const applyGeometry = async function(
    geometryFunction,
    {
      counter = 1,
      radius = 0.5
    } = {}
  ){  
  let newGeometry = await geometryFunction(
      {
        n: counter,
        r: radius
      }
    )  
  let newPhenotype = {
    color: newGeometry.r,
    point: {
      x: newGeometry.x,
      y: newGeometry.y
    }
  }  
  return newPhenotype
}