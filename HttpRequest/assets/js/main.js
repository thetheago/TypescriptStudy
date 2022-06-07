const request = (obj) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const result = await request(objConfig);
        carregarResultado(result);
    } catch (error) {
        if(error === "Not Found"){
            carregarResultado('<h3>A página não foi encontrada</h3>');
        }else{
            carregarResultado(error);
        }
    }
    

}

function carregarResultado(response) {

    const divResultado = document.querySelector('.resultado');
    divResultado.innerHTML = response;

}