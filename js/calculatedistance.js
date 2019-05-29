const calculateDistance = async function(pointA, pointB){
  if (pointA.x >= pointB.x) {
    return (Math.sqrt(Math.pow( (pointB.x-pointA.x), 2) + Math.pow( (pointB.y-pointA.y), 2)))
  } else {
    return (Math.sqrt(Math.pow( (pointA.x-pointB.x), 2) + Math.pow( (pointA.y-pointB.y), 2)))
  }
}