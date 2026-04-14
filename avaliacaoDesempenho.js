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
let mensagem = ''

if (desempenhoPercentual >= 100) {
    classificacao = 'Excelente'
    bonusPercentual = 20
    mensagem = 'Parabéns! Você superou a meta e recebeu um bônus de 20%.'
} else if (desempenhoPercentual >= 80) {
    classificacao = 'Bom'
    bonusPercentual = 10
    mensagem = 'Bom trabalho! Você atingiu uma boa performance e ganhou um bônus de 10%.'
} else if (desempenhoPercentual >= 50) {
    classificacao = 'Regular'
    bonusPercentual = 5
    mensagem = 'Desempenho regular, Você recebeu um bônus de 5% para incentivar melhorias.'
} else {
    classificacao = 'Ruim'
    bonusPercentual = 0
    mensagem = 'Desempenho Ruim, Foque em melhorar para próximos períodos.'
}

const bonus = (bonusPercentual / 100) * salarioBase
const salario = salarioBase + bonus

console.log(`========== Avaliação de Desempenho ==========`)
console.log(`Funcionário: ${nome}`)
console.log(`Cargo: ${cargo}`)
console.log(`Salário Base: R$ ${salarioBase}`)
console.log(`Resultado Alcançado: R$ ${resultadoPeriodo}`)
console.log(`Desempenho: ${Math.round(desempenhoPercentual)}% - ${classificacao}`)
console.log(`Bônus: R$ ${bonus} (${bonusPercentual}%)`)
console.log(`Salário Final: R$ ${salario}`)
console.log(`Mensagem: ${mensagem}`)
console.log(`============================================`)
