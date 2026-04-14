// Avaliação 

const readline = require('readline-sync')

const META_MENSAL = 10000

const nome = readline.question('Qual o nome do funcionário: ')
const cargo = readline.question('Qual o cargo do funcionário: ')
const salarioBase = readline.questionFloat('Salário base do funcionário: R$ ')
const resultadoPeriodo = readline.questionFloat('Resultado alcançado no período (R$): ')
const desempenhoPercentual = (resultadoPeriodo / META_MENSAL) * 100
let classificacao = ''
let bonusPercentual = 0

if (desempenhoPercentual >= 100) {
    classificacao = 'Excelente'
    bonusPercentual = 20
} else if (desempenhoPercentual >= 80) {
    classificacao = 'Bom'
    bonusPercentual = 10
} else if (desempenhoPercentual >= 50) {
    classificacao = 'Regular'
    bonusPercentual = 5
} else {
    classificacao = 'Ruim'
    bonusPercentual = 0
}

const bonus = (bonusPercentual / 100) * salarioBase
const salario = salarioBase + bonus

console.log(`========== Avaliação de Desempenho ==========`)
console.log(`Funcionário: ${nome}`)
console.log(`Cargo: ${cargo}`)
console.log(`Salário Base: R$ ${salarioBase}`)
console.log(`Resultado Alcançado: R$ ${resultadoPeriodo}`)
console.log(`Desempenho: ${desempenhoPercentual}% - ${classificacao}`)
console.log(`Bônus: R$ ${bonus} (${bonusPercentual}%)`)
console.log(`Salário Final: R$ ${salario}`)
console.log(`============================================`)

