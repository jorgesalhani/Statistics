import fairDiceHistogram from './fairDiceModule.js';

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

divChapterElement = document.createElement('div');
pElement = document.createElement('p');
pElement.innerHTML = `
  Para cada modelo probabilístico, é importante estabelecermos:
  <br>
  <b>(a) Espaço amostral</b> $ \\Omega $ no caso discreto, consiste na enumeração de todos os resultados possíveis do experimento. Sendo $ \\omega_i $ cada um dos $ i $ eventos, temos que
  $$ \\Omega = \\{ \\omega_1, \\omega_2, \\ldots, \\omega_n, \\ldots\\} $$
  <b>(b) Probabilidade </b> $ P(\\{\\omega\\}) $ representa a probabilidade de ocorrência de um dado evento ou conjunto de eventos possíveis
  <br><br>

  <b>Frequência de ocorrência de conjunto de eventos: lançamento de moedas</b>
  <br><br>

  Se lançamos uma moeda duas vezes, existem 4 conjuntos de eventos. Sendo <i>C</i> cara e <i>R</i> coroa, nosso espaço amostral será:
  $$ \\Omega = \\{\\omega_1, \\omega_2, \\omega_3, \\omega_4\\} $$
  onde 
  $$ \\omega_1 = (C,C), \\omega_2 = (C,R), \\omega_3 = (R,C), \\omega_4 = (R,R) $$
  Seja <i>A</i> um conjunto de eventos que tenhamos interesse, por exemplo na obtenção de faces iguais nos dois lançamentos, temos que $ A = \\{(C,C), (R,R) \\} = \\{ \\omega_1, \\omega_4 \\} $. Assumindo que não existe preferência entre as ocorrências, temos que
  $$ P(A) = P(\\{ \\omega_1, \\omega_2 \\}) = 1/4 + 1/4 = 1/2 $$
  De modo geral, temos que a probabilidade de um conjunto de eventos <i>A</i> é dado pela soma da probabilidade da ocorrência dos eventos individuais contidos em <i>A</i> tal que
  $$ P(A) = \\sum_j P(\\omega_j), \\omega_j \\in A$$


`
divChapterElement.append(pElement);
t01Element.appendChild(divChapterElement);

