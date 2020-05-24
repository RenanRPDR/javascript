const pai = {nome: 'Pedro', corCabelo: 'preto'};

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.nome, filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
});

console.log(filha2);
filha2.nome = 'Carla';

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Função com for in para verificar se a heranca veio do objeto ou por herança
for (let key in filha2) {
  filha2.hasOwnProperty(key) ?
    console.log(`Veio do objeto ${key}`) : console.log(`Veio por herança: ${key}`)
}