import { Votation } from "./votations";
import { VotationApp } from "./votations";

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({option: 'Python', votos: 0});
votation1.addVotationOption({option: 'Javascript', votos: 0});
votation1.addVotationOption({option: 'Typescript', votos: 0});
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();
