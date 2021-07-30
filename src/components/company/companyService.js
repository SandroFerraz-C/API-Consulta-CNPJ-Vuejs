import * as $ from 'jquery';

export const addCnpj = event => {
    event.preventDefault();
};

export const checkCnpj = event => {
    const cnpj = event.target.value;
    $.get({
        'url': 'https://www.receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),
        'type': "GET",
        'dataType': 'jsonp',
        'success': function(data) {
            if (data.nome == undefined) {
                alert(data.status + " " + data.message)
            } else {
                document.getElementById("razaoSocial").value = data.nome;
                document.getElementById("fantasia").value = data.fantasia;
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("numero").value = data.numero;
                document.getElementById("municipio").value = data.municipio;
                document.getElementById("uf").value = data.uf;
            }
        }
    })
}