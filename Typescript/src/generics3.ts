//Interfaces e Type Alias
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

//Type
type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: "Thiago",
  sobrenome: "Henrique",
  idade: 20
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 1,
  sobrenome: 2,
  idade: 3
};

const aluno3: PessoaProtocolo = { //Foram passados tipos padrões na interface
  nome: "Thiago",
  sobrenome: "Henrique",
  idade: 20
};

const aluno4: PessoaProtocolo2 = { //Foram passados tipos padrões na interface
  nome: "Thiago",
  sobrenome: "Henrique",
  idade: 20
};

console.log(aluno);
console.log(aluno2);
console.log(aluno3);
console.log(aluno4);
