import { Pilha } from './generics5';

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.listarPilha();
pilha.pop();
console.log('--');
pilha.listarPilha();
