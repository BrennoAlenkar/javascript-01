let numeros = [1,2,3,4,5];

let numerosFiltrados = numeros.filter(verificar);

function verificar(valor) {
    return valor > 2
}

console.log(numerosFiltrados);