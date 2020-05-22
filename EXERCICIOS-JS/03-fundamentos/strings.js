const escola = "Cod3r"

console.log(escola.charAt(4))
// Quando o contador passa de quantos carateres existem dentro da string ele imprime algo vazio na tela.
console.log(escola.charAt(5)+"Espaço em branco")

// Unicode do terceiro caracter da string
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

// Imprimi a partir do indice 1
console.log(escola.substring(1))

// Imprimi a partir do indice 0 até o 3
console.log(escola.substring(0, 3))

// Concatenando textos com funcao .concat
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

// Substituindo um caracter dentro de uma string com replace
console.log(escola.replace(3, 'e'))

// Substituindo todos caracteres por 'e', essa é uma Expressão Regular (Realizar um curso a parte para obter esse conhecimento)
console.log(escola.replace(/\w/g, 'e'))

// Funcao sploit para criar um array com strings dentro.
console.log('Ana,Maria,Pedro'.split(','))
