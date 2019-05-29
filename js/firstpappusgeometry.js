const firstPappusGeometry = async function(
    {
      r = 0.5, 
      n = 1
    } = {}
  ){

  const newX =
    (
      (r*(1+r))
      /
      (
        2
        *(
            (Math.pow(n, 2))
          * (Math.pow((1-r), 2))
          + r
        )
      )
    )

  const newY =
    (
      ((n*r)*(1-r))
      /
      (
         (Math.pow(n, 2))
        *(Math.pow((1-r), 2))
        + r
      )
    )

  const newR =
    (
      ((1-r)*r)
      /
      (
        2
        *(
            (Math.pow(n, 2))
          * (Math.pow((1-r), 2))
          + r
        )
      )
    )

  return {r: newR, x: newX, y: newY}
}