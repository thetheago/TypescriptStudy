
document.getElementById('noPromise').onclick = function(){
    waitThere("Mensagem 1", rand(1, 3));
    waitThere("Mensagem 2", rand(1, 3));
    waitThere("Mensagem 3", rand(1, 3));
    console.log("Console Log Msg 4");
}

document.getElementById('withPromise').onclick = function(){
    waitTherePromise("Mensagem 1", rand(1, 3))
    .then((resposta) => {
        console.log(resposta);
        return waitTherePromise(1234, rand(1, 3));
    })
    .then((resposta) => {
        console.log(resposta);
        return waitTherePromise("Mensagem 3", rand(1, 3));
    }).then((resposta) => {
        console.log(resposta);
    }).catch((e) => {
        console.log(e);
    });

    console.log("Console Log Msg 4");
}

//-----------------------------------------

//Função para gerar número aleatório para o timeOut 
function rand(min=0, max=3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

//Exemplo sem promise
function waitThere(msg, time){
    setTimeout(() => {
        console.log(msg)
    }, time);
}

//Exemplo com promise
function waitTherePromise(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof(msg) !== "string"){
            reject("Erro, bad value - E aqui o promise para.");
        }
         
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

// waitTherePromise('Primeira mensagem', rand(1, 3)).then((resposta) => {
//     console.log(resposta);
// });

//------------------------------------------------------------------------------
async function executa(){

    const fase1 = await waitTherePromise('Fase 1', rand());
    console.log(fase1);
    const fase2 = await waitTherePromise('Fase 2', rand());
    console.log(fase2);
    const fase3 = await waitTherePromise('Fase 3', rand());
    console.log(fase3);

    console.log("Fim");

}

executa();