function getFairDiceFrequencyDistribution(N) {
  let diceFrequecyDistribution = [];
  let r = 0;
  for (let i = 0; i < N; i++) {
    r = Math.floor(Math.random() * 6 + 1);
    diceFrequecyDistribution.push(parseFloat(r));
  }
  return diceFrequecyDistribution;
}

function fairDiceHistogram() {
  var margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
  
  let svgElement = document.createElement('div');
  svgElement.classList.add('data-viz')
  let t01Element = document.querySelector('.T01');
  t01Element.appendChild(svgElement);
var svg = d3.select(".data-viz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// get the data
let data = getFairDiceFrequencyDistribution(100);
  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([1, 7])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
      .range([1, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { 
        return d; 
      })   // I need to give the vector of value
      .domain(x.domain())  // then the domain of the graphic
      .thresholds(x.ticks(7)); // then the numbers of bins

  // And apply this function to data to get the bins
  var bins = histogram(data);

  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
  svg.append("g")
      .call(d3.axisLeft(y));

  // append the bar rectangles to the svg element
  bins.pop()
  svg.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { 
          return "translate(" + x(d.x0) + "," + y(d.length) + ")"; 
        })
        .attr("width", function(d) { 
          return x(d.x1) - x(d.x0)
        })
        .attr("height", function(d) { 
          return height - y(d.length); 
        })
        .style("fill", "#69b3a2");

    console.log(data);
    console.log(bins);
}

let t01Element = document.querySelector('.T01');

let divChapterElement = document.createElement('div');
let pElement = document.createElement('p');
pElement.innerHTML = `
  <b>Conceitos Importantes:</b>
  <br><br>
  - <b>Distribuição de frequências</b> é importante para avaliação da <b>variabilidade</b> das observações.<br>
  - Medidas da variabilidade, por exemplo <b>Média</b> e <b>Desvio padrão</b> são estimativas de quantidades associadas às populações das quais os dados foram extraídos<br>
  - Frequências relativas são estimativas de probabilidades de ocorrências de certos eventos de interesse<br>
  <br><br>

  <b>Frequência de ocorrência de faces de um dado</b>
  <br><br>
  Sendo $ i = 1, 2, 3, ..., 6$, com $ n_i $ representando o número de vezes de ocorrência da face $ i $ e $ n $ o número total de ocorrências, a proporção $ n_i / n $ determina a distribuição de frequências.<br>
  Supondo dado equilibrado, nenhuma face é favorecida.
  `;
divChapterElement.append(pElement);
t01Element.appendChild(divChapterElement);

fairDiceHistogram();