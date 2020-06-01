console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
// Função sort é para colocar em ordem alfabética
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
// O primeiro paramentro diz a partir de qual indice o splice irá apagar
// O segundo param. diz qtos elementos ele irá apagar após o indice passado no primeiro parametro 
// Os paramẽtros seguites ele irá adicionar novos valores em novos indices
aprovados.splice(1, 1)
console.log(aprovados)