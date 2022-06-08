type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNumeros);

async function promiseAsync<T>(digit: T): Promise<T> {
  return digit;
}

function minhaPromise<MeuTipo>(digit: MeuTipo): Promise<MeuTipo | number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(digit);
    }, 1000);
  });
}



promiseAsync(3).then(result => console.log(result + 1));
minhaPromise(4).then(result => console.log(result + 1));
