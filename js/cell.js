class Cell {
  constructor(options = {}) {
    const {
      signature = (Math.abs((Number(new Date).toString().slice(-5))^(Math.random().toString(10).slice(2)))),
      mother = 0,
      genotype = {
        color: 0,
        point: {
          x: 0,
          y: 0
        }
      },
      phenotype = {
        color: 0,
        point: {
          x: 0,
          y: 0
        }
      }
    } = options

    this.signature = signature
    this.mother = mother
    this.genotype = {
      color: genotype.color,
      point: genotype.point
    }
    this.phenotype = {
      color: phenotype.color,
      point: phenotype.point
    }
  }

  showSignature() {
    return this.signature
  }

  showMother() {
    return this.mother
  }

  showGenotype() {
    return this.genotype
  }

  showPhenotype() {
    return this.phenotype
  }

  setMother(mother) {
    this.mother = mother
  }

  mutate(options = {}) {
    const {
        color = 0,
        point = {
          x: 0,
          y: 0
        },
      random = false,
      min = 0,
      max = 1
    } = options

    if (random) {
      this.genotype = {
        color: ((Math.random() >= 0.5) == true ? 1 : 0),
        point: {
          x: (Math.random() * (max - min + 1) + min),
          y: (Math.random() * (max - min + 1) + min)
        }
      }
    } else {
      this.genotype = {
        color: color,
        point: point
      }
    }
  }

  express(options = {}) {
    const {
        color = 0,
        point = {
          x: 0,
          y: 0
      },
      influence = false
    } = options

    if (influence) {
      this.phenotype = {
        color: color,
        point: point
      }
    } else {
      this.phenotype = {
        color: this.genotype.color,
        point: this.genotype.point
      }
    }
  }
}
