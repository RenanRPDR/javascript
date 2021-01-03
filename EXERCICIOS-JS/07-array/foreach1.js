const aprovados = ['Agatha','Algo','Daniel', 'Raquel'];

// forEach tem 3 parametros para serem utilizados (nome, indice, indice)
aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

//aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)