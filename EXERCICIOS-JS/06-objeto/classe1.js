class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 5000)
const freela = new Lancamento('Website', 1000)
const contaDeLuz = new Lancamento('Luz', -220)
const hospedagem = new Lancamento('AWS', -500)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, freela, hospedagem)
console.log(contas.sumario())