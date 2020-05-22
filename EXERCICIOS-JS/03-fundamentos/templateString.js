const nome = "Rebeca";
const concatenacao = "Helllo " + nome + "!";

// O backstick é delimitado por crase `

// Se colocar o template string na mesma linha ele fica tudo na mesma linha.
const template1 = `    Hello    ${nome}!`;
console.log(concatenacao, template1);

// Se colocar o template string com quebra de linhas ele interpreta e te imprimi dessa forma.
const template2 = `
    Hello
    ${nome}!`;
console.log(concatenacao, template2);

// Nesse caso ele interpreta e executa os valores dentro da expressão que está entre parentese ().
console.log(`1 + 1 = ${1 + 1}`);

// Criando funcoes com template string
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
