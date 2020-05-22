const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10);
imprimirResultado(4);

// Ter cuidado com o tratamento do valor recebido, JS é fracamente tipado e traz resultado que podem confundir.
imprimirResultado('Epa!'); 

// Nessa caso a string convertida é um numero e da certo.
imprimirResultado('6');