const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

// Método push para adicionar um valor dentro do array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Ele deleta o ultimo valor do array.
console.log(valores.pop())

// Deleta uma posição específica do array
delete valores[0]
console.log(valores)

// Um array em javascript ele é um objetc
console.log(typeof valores)