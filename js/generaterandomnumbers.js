const generateRandomNumbers = function(options = {}) {
  const {
    counter = 1,
    min = 0,
    max = 1
  } = options

  let arrayOfRandomNumbers = []

  for (let i = 0; i < counter; i++) {
    arrayOfRandomNumbers.push(Math.random() * (max - min + 1) + min)
  }
  return arrayOfRandomNumbers
}
