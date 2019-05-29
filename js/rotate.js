const rotate = async function(
    {
      point = {
        x: 0, 
        y: 0
      },
      center = {
        x: 0, 
        y: 0
      },
      angleInDegrees = 0
    } = {}
  ){
  
  angle = (angleInDegrees) * (Math.PI/180)

  let rotatedX =
      Math.cos(angle) * (point.x - center.x)
      - Math.sin(angle) * (point.y - center.y)
      + center.x

  let rotatedY =
      Math.sin(angle) * (point.x - center.x)
      + Math.cos(angle) * (point.y - center.y)
      + center.y

  return {rotatedX, rotatedY}
}