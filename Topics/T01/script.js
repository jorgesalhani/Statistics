function getFairDiceOccurrences(N) {
  let diceFrequecyDistribution = [];
  let r = 0;
  for (let i = 0; i < N; i++) {
    r = Math.floor(Math.random() * 6 + 1);
    diceFrequecyDistribution.push(parseFloat(r));
  }
  return diceFrequecyDistribution;
}

function fairDiceHistogram() {
  let margin = {top: 10, right: 30, bottom: 30, left: 40};
  let width = 460 - margin.left - margin.right;
  let height = 400 - margin.top - margin.bottom;
  
  let svgElement = document.createElement('div');
  svgElement.classList.add('data-viz')
  let t01Element = document.querySelector('.T01');
  t01Element.appendChild(svgElement);

  let svg = d3.select(".data-viz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  let nSample = 10;
  let data = getFairDiceOccurrences(nSample);
  let x = d3.scaleLinear()
    .domain([1, 7])     
    .range([1, width]);
  
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  console.log(x.domain());
  let histogram = d3.histogram()
      .value(function(d) {
        return d; 
      })
      .domain(x.domain())
      .thresholds(x.ticks(6));

  let bins = histogram(data);

  let y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(bins, function(d) { 
      return d.length / nSample; 
    })]);
    
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
          return "translate(" + x(d.x0) + "," + y(d.length / nSample) + ")"; 
        })
        .attr("width", function(d) { 
          return x(d.x1) - x(d.x0)- 1;
        })
        .attr("height", function(d) { 
          // console.log(d.length, '--');
          console.log(x(d.x0));
          return height - y(d.length / nSample); 
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