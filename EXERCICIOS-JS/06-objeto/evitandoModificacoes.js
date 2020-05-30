// Object.preventExtensions - nao deixar criar
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal  - voce não consegue add novos atrr, nao consegue excluir 
// mas consegue modificar os valores dos atrr do objeto.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes

const carro = { nome: 'Gol', ano: 1990, cor: 'vermelho' }
Object.freeze(carro)
console.log('Freezed!:', Object.isSealed(carro))

carro.nome = 'Palio'
console.log('Nao trocou nome do carro. Carro:',carro)
delete carro.nome
console.log('Nao deletou attr nome. Carro:', carro)
console.log(carro)
carro.ano = 2000
console.log(carro)
delete carro.ano
console.log(carro)
carro.cor = 'verde'
console.log(carro)
delete carro.cor
console.log(carro)

