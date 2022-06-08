/* eslint-disable @typescript-eslint/no-unused-vars */
//Record - você diz qual o tipo da key e qual o tipo do valor
const objeto1: Record<string, string | number> = {
  nome: 'Thiago',
  sobrenome: 'Henrique',
  idade: 18,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required - Transforma um type com valores opcionais em valores required
type PessoaRequired = Required<PessoaProtocol>;
// Partial - Transforma tudo em opcional
type PessoaPartial = Partial<PessoaRequired>;
//Pick - Pega os campos de um type e coloca em outro
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;
// Readonly - Transforma tudo em Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

const pessoa1: PessoaReadonly = {
  nome: "Bruno",
  sobrenome: "Junior",
  idade: 15
}

// pessoa1.nome = "Kinderley"; - Não pode pq é readonly

const objeto2: PessoaRequired = {
  nome: "Thiago",
  sobrenome: "Gomes",
  idade: 20
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // Computa todos os tipos de ABC que NÃO estão em CDE
type TipoExtract = Extract<ABC, CDE>; // Computa todos os tipos de ABC que ESTÃO e CDE








// Module mode
export default 1;
