(async () => {

  const xScale = d3.scaleLinear()
  //.domain([0, d3.max(data, (d) => d3.max(d, Number))])
  .range([0, width*0.5])

  const yScale = d3.scaleLinear()
    //.domain([0, d3.max(data, (d) => d3.max(d, Number))])
    .range([width*0.5, 0])

  const rScale = d3.scaleLinear()
    //.domain([0, d3.max(data, (d) => d3.max(d, Number))])
    .range([0, width*0.5])

  const oCanvas = d3.select(".o")
  const svg = oCanvas.append("svg")

  svg.attr("width", `${width}`)
    .attr("height", `${height}`)
    .attr("viewBox", `${-width*0.5} ${-height*0.5} ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("transform", `rotate(${-90})`)

  const updateData = async function*(data) {    
    while (true) {
      const t = svg.transition()
          .duration(800)

    svg.selectAll("g")
      .data(data)
      .join(
        enter => enter.append("g")
        .call(enter => enter.transition(t).duration(2000)),
        update => update
        //.call(enter => enter.transition(t).duration(2000))
        //exit => exit.exit().remove()
      )
      .selectAll("circle")
        .data(d => d)
        .join(
          enter => enter.append("circle")
            .call(enter => enter.transition(t)
              .attr("r", (d) => {
                //return d.genotype.color*10*(Math.random() * (10 - 1 + 1) + 1)
                //console.log(d.newR)
                //return rScale(d.newR)
                return d.phenotype.color*400
              })
              .attr("cx", (d) => {
                //return d.genotype.point.x
                //return xScale(d.newX)
                return d.phenotype.point.x*400
              })
              .attr("cy", (d) => {
                //return d.genotype.point.y
                //return yScale(d.newY)
                return d.phenotype.point.y*-400
              })
              .attr("fill", "none")
              .attr("stroke", "gray")
              .attr("stroke-width", 1)),
          update => update
            .call(update => update.transition(t).duration(1000)
              .attr("r", (d) => {
                //return d.genotype.color*10*(Math.random() * (10 - 1 + 1) + 1)
                //console.log(d.newR)
                //return rScale(d.newR)
                return d.phenotype.color*400
              })
              .attr("cx", (d) => {
                //return d.genotype.point.x
                //return xScale(d.newX)
                return d.phenotype.point.x*400
              })
              .attr("cy", (d) => {
                //return d.genotype.point.y
                //return yScale(d.newY)
                return d.phenotype.point.y*-400
              })
              .attr("fill", "none")
              .attr("stroke", "gray")
              .attr("stroke-width", 1)),
          exit => exit
            .call(exit => exit.transition(t).duration(1000)
              .attr("r", (d) => {
                //return d.genotype.color*10*(Math.random() * (10 - 1 + 1) + 1)
                //console.log(d.newR)
                //return rScale(d.newR)
                return d.phenotype.color*400
              })
              .attr("cx", (d) => {
                //return d.genotype.point.x
                //return xScale(d.newX)
                return d.phenotype.point.x*400
              })
              .attr("cy", (d) => {
                //return d.genotype.point.y
                //return yScale(d.newY)
                return d.phenotype.point.y*-400
              })
              .attr("fill", "none")
              .attr("stroke", "gray")
              .attr("stroke-width", 1)
              .remove())
        )
        .attr("transform", `translate(${0, -200})`)
      yield svg
      await Promises.tick(2500)
    }
  }

  let {
    numberOfCells,
    maxNumberOfGenerations,
    evolveOn,
    wrapOn,
    randomOn,
    randomMin,
    randomMax,
    origin,
    base,
    baseRadius,
    scalingFactor,
    //generations,
    patternRepetitions,
    genotypePattern,
    genotypePatternOn,
    bloomAngle
  } = await provideParameters()

  const updateCurrentValue = async function(event){
    if (this.checked == true) {      
      compose({userRandomOn: true})
    } else {
      compose({userRandomOn: false})
    }
  }

  const updateCellPattern = async function(event){
    const userTextInput = this.value
    const userCellPattern = await translateStringToBinary(userTextInput)
    compose({userGenotypePatternOn: true, userGenotypePattern: userCellPattern})
  }

  d3.select("#userRandomOnCheck").on("click", updateCurrentValue)
  d3.select("#messageBox").on("keyup", updateCellPattern)

  const compose = async function(
      {
        userRandomOn = false,
        userGenotypePatternOn = true,
        userGenotypePattern = [1, 0, 1],
        userEvolveOn = true
      } = {}
  ){
    let {
      numberOfCells,
      maxNumberOfGenerations,
      evolveOn,
      wrapOn,
      randomOn,
      randomMin,
      randomMax,
      origin,
      base,
      baseRadius,
      scalingFactor,
      //generations,
      patternRepetitions,
      genotypePattern,
      genotypePatternOn,
      bloomAngle
    } = await provideParameters()

    randomOn = userRandomOn
    genotypePatternOn = userGenotypePatternOn,
    genotypePattern = userGenotypePattern,
    evolveOn = userEvolveOn
    //maxNumberOfGenerations = userMaxNumberOfGenerations

    const cells = await createCells(
      {
        genotypePatternOn: genotypePatternOn,
        genotypePattern: genotypePattern
      }
    )

    const generations = await evolve(
      createCells,
      cloneCells,
      mutateCells,
      populate,
      applyRule,
      rule110,
      cells,
      {
        counter: maxNumberOfGenerations,
        wrap: wrapOn,
        random: randomOn,
        min: randomMin,
        max: randomMax,
      }
    )

      const bloomedCells = await bloom(
        applyGeometry,
        firstPappusGeometry,
        secondPappusGeometry,
        {
          generations: generations,
          bloomRadius: baseRadius,
        }
      )

      await shrinkCells(
        bloomedCells,
        {
          scalingFactor: scalingFactor
        }
      )
      const x = await updateData(bloomedCells)
      await x.next()
  }
  compose()
})()