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




