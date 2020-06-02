const pilotos = ['Vettel', 'Aloson', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode add e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // O massa quebrou de novo
console.log(pilotos)

// Ele retorna um novo array a partir do elemento passado como parametro
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// Pega a partir do primeiro indice e retorna todos antes do quarto indice
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
