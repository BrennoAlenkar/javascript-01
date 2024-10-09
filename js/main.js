const segundos = 1000;
let cronometro = 0;

function iniciar() {
    setInterval(() => {
        cronometro += 1; 
        document.querySelector('.teste').innerHTML = cronometro; 
    }, segundos);
}

iniciar();