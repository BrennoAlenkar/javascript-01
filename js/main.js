function buscarCEP() {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/74423460/json/');
    ajax.send();

    ajax.onload = function () {
        
        document.querySelector('.teste').innerHTML = this.responseText;

        const OBJ = JSON.parse(this.responseText);

        let cidade = OBJ.localidade;
        let uf = OBJ.uf;
        let cep = OBJ.cep;
        let complemento = OBJ.complemento;

        document.querySelector('.teste').innerHTML = `
        Cidade: ${cidade},
        Região: ${uf},
        CEP: ${cep},
        Referência: ${complemento},

        `
    }

}

buscarCEP()



