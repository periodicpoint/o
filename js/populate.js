const populate = async function(cellCreationFunction, cells, options = {}) {
  const {
    random = false,
    min = 0,
    max = 1,
    counter = 1,
    newLeftCellPattern = [
      {
        color: 0,
        point: {
          x: 0,
          y: 0
        }
      }
    ],
    newRightCellPattern = [
      {
        color: 0,
        point: {
          x: 0,
          y: 0
        }
      }
    ],
  } = options

  let newLeftCells = await cellCreationFunction({
    random: random,
    min: min,
    max: max,
    counter: counter,
    genotypePattern: newLeftCellPattern
  })
  let moreCells = [...newLeftCells, ...cells]

  let newRightCells = await cellCreationFunction({
    random: random,
    min: min,
    max: max,
    counter: counter,
    genotypePattern: newRightCellPattern
  })
  moreCells = [...moreCells, ...newRightCells]

  return moreCells
}
