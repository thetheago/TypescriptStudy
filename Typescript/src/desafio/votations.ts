type VotationOption = {
  votos: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public details: string) {

  }

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if(!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].votos++;
  }

  get VotationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for(const votation of this.votations){
      console.log(votation.details);
      for(const votationOption of votation.VotationOptions) {
        console.log(votationOption.option, votationOption.votos);
      }
      console.log("----------");
    }
  }
}
