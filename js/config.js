const defaultCell = {
  genotype: {
    color: false,
    point: {
      x: 0,
      y: 0
    }
  },
  phenotype: {
    color: 0,
    point: {
      x: 0,
      y: 0
    }
  }
}

const margin = {top: 10, right: 10, bottom: 10, left: 10}
const width = (500 - margin.left - margin.right)
const height = (500 - margin.top - margin.bottom)
const center = {x: width*0.5, y: height*0.5}
