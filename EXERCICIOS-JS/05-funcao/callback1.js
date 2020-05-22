const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

// Chamando uma funcao com callback dentro dela
fabricantes.forEach(imprimir);
fabricantes.forEach(function(fabricante) {
  console.log(fabricante);
});

console.log("\n");
// Funcao de cima reproduzida com arrow functionk
fabricantes.forEach(fabricante => console.log(fabricante));
