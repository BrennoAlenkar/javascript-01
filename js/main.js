const pessoa = {
    nome: 'Brenno Alencar',
    idade: 27,
    salario: 3500,
    love: 'jj',
    trabalho: 'Developer',

    completo: function() {
        document.querySelector('.teste').innerHTML = `O nome é ${this.nome}, tem ${this.idade}, ganha R$${this.salario} e seu grande amor é a ${this.love}!`
    }
}


console.log(pessoa.completo());