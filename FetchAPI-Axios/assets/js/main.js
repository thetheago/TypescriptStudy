// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

axios.get('pessoas.json').then(resposta => carregaElementosNaPagina(resposta.data));

// fetch('./pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json))
//     .catch(error => console.log(error));

function carregaElementosNaPagina(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        const tr = document.createElement('tr');
        
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '<b>R$ '+pessoa.salario+'</b>';
        tr.appendChild(td);

        table.appendChild(tr);
    }

    document.querySelector('.resultado').appendChild(table);

    
}
