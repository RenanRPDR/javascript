const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem usar o callback tendo que criar for com variavel para acessar o indice de um array
const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}
console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(function(nota) {
  return nota <= 7;
});
console.log(notasBaixas2);

// Arrow com callback
const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);

/* Transformando a arrow function em uma funcao dentro de uma varial para usar
 ela em outras partes do seu sistemas*/
const notasAbaixoDe7 = nota => nota < 7;
const notasBaixas4 = notas.filter(notasAbaixoDe7);
console.log(notasBaixas4);
