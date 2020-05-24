// Cadeia de prototipos (prototype chain)
// Evitar mecher nesse prototype 
Object.prototype.attr0 = 'Quando nao existe o attr na cadeia de heranca ele busca no prototype\n'
const avo = {attr1: 'a'}                   // Aqui no attr3 de pai, aconteceu um sombreamento, porque attr3 ja existe em filho
const pai = { __proto__: avo, attr2: 'b', attr3: 'c'}
const filho = { __proto__: pai, attr3: 'c'}

console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMAx
      }
    },
    status() {
      return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
  }

  const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, essa velMax sombreou a de carro
  }

  const volvo = {
    modelo: 'V40',
    status() {
      return `${this.modelo}: ${super.status()}`
    }
  }

  Object.setPrototypeOf(ferrari, carro)
  Object.setPrototypeOf(volvo, carro)

  console.log(ferrari)
  console.log(volvo)

  volvo.acelerarMais(100)
  console.log(volvo.status())

  ferrari.acelerarMais(300)
  console.log(ferrari.status())