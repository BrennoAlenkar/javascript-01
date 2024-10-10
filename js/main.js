let botao = document.querySelector('.botao');
let resposta = document.querySelector('.teste');
let minIdade = 16;
let idadeOpcional = 18;
let idadeMax = 65;

botao.onclick = () => {
    let idade = document.querySelector('#input').value;
    idade = Number(idade);

    if (idade < minIdade) {
        resposta.innerHTML = `A idade é ${idade} anos, Não vota!`;
        resposta.style.color = 'red';

    } else if (idade < idadeOpcional || idade >= idadeMax) {
        resposta.innerHTML = `A idade é ${idade} anos, Voto opcional`;
        resposta.style.color = 'blue';

    } else {
        resposta.innerHTML = `A idade é ${idade} anos, Voto obrigatorio`;
        resposta.style.color = 'green';
    }
}

