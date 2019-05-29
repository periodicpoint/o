const applyRule = async function(rule, cells) {
  const newGenotypeColor = rule(
    cells[0].genotype.color,
    cells[1].genotype.color,
    cells[2].genotype.color
  )
  return newGenotypeColor
}