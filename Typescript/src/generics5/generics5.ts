// export class Pessoa<T, U> {
//   constructor(public nome: T, public idade: U){}
// }

export class Pilha<T> {
  private contador = 0;
  private elementos: {[key: number]: T} = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if(this.estaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho() : number {
    return this.contador;
  }

  listarPilha() : void {
    for(const key in this.elementos){
      console.log(this.elementos[key]);
    }
  }
}
