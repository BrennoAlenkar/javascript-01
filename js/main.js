function buscarCEP() {
    const ajax = new XMLHttpRequest();
    let input = document.getElementById('input').value;
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        document.querySelector('.teste').innerHTML = this.responseText;

        const obj = JSON.parse(this.responseText);

        let cidade = obj.localidade;
        let bairoo = obj.uf;
        let cep = obj.cep;
        let ddd = obj.ddd;

        document.querySelector('.teste').innerHTML = `
        ${cidade}  
        ${bairoo} 
        ${cep} 
        ${ddd} 
        `
    }
}