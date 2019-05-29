const secondPappusGeometry = async function(
    {
      r = 0.5,
      n = 1
    } = {}
  ){
  
  const newX =
    (r*(7+r))
    /
    (
      2
      *
      (
        4+((4*n*(n-1)*Math.pow((1-r), 2))+(r*(r-1)))
      )
    )

  const newY =
    (2*((2*n)-1)*r*(1-r))
    /
    (
      4+((4*n*(n-1)*Math.pow((1-r), 2))+(r*(r-1)))
    )

  const newR = 
    (r*(1-r))
    /
    (
      2
      *
      (
        4+((4*n*(n-1)*Math.pow((1-r), 2))+(r*(r-1)))
      )
    )
  
  return {r: newR, x: newX, y: newY}
}