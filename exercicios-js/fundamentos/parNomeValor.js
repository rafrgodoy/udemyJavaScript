// par chave/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contextp léxico 2
    return saudacao
}

const cliente = {
    nome: 'Rafael',
    idade: 28,
    peso: 60,
    endereco: {
        logradouro: 'Rua Cristalina',
        numero: 211,
        cep: '30882250',
        cidade: 'Belo Horizonte',
        estado: 'MG'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)