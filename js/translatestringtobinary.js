const translateStringToBinary = async function(string, {join = true} = {}) {
  let arrayOfCharacters = [...string]
  let arrayOfBinaryStrings = []
  let binaryArray = []
  for (var i = 0; i < arrayOfCharacters.length; i++) {
    let currentBinaryString = arrayOfCharacters[i].charCodeAt(0).toString(2)
    arrayOfBinaryStrings.push(currentBinaryString)
  }

  let tempBinaryString = arrayOfBinaryStrings.join('')
  let tempBinaryArray = tempBinaryString.split('')
  
  //for (let i = 0; i < tempBinaryArray.length; i++) {
    let currentBinaryArray = tempBinaryArray.map(Number)
    //binaryArray.push(currentBinaryArray)
  //}

  if (join) {
    //return arrayOfBinaryStrings.join('')
    //console.log(currentBinaryArray)
    return currentBinaryArray
  } else {
    //return arrayOfBinaryStrings
    return binaryArray
  }
}
