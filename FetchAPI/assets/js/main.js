
//Fetch API retorna uma promise

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

//Com async
async function carregaPagina(el) {
    const href = el.getAttribute('href');

    try {
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('Página não encontrada');
        carregarResultado(await response.text()); // .text retorna uma promise
    } catch (error) {
        carregarResultado(error);
    }

}

//Com promise
// function carregaPagina(el) {
//     const href = el.getAttribute('href');


//     fetch(href)
//         .then(response => {
//             return response.text();
//         })
//         .then(html => carregarResultado(html))
//         .catch(e => console.log(e));

// }

function carregarResultado(response) {

    const divResultado = document.querySelector('.resultado');
    divResultado.innerHTML = response;

}