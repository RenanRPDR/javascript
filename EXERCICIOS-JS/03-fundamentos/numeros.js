const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Melhor controle sobre a quantidade de casa decimais, usando a função toFixed passe por parâmetro a qtde de casas desejadas.
console.log(media.toFixed(2))

// Convertendo o valor de uma operação numérica para binário(2), octal(7) ou hexa(16)
console.log(media.toString(2)) // em binário

// Tipo do dado, quando o number está escrito em minúsculo.
console.log(typeof media)

// Tipo da função, quando o number está escrito em maiusculo
console.log(typeof Number)