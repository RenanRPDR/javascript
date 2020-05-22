let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// Lógica para operações TRUE
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Lógica para operações FALSE 
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Imprimindo strings fazendo regras com booleanos.
console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

// Se a string nome estiver vazia ele imprime o valor Desconhecido por causa da condição lógica OU representado por || 
let nome = 'Lucas'
console.log(nome || 'Desconhecido')