export class Edition {
  categories!: number[];
  theme!: string;
  description!: string;
  debutSoumission!: Date;
  finSoumission!: Date;
  typeEdition!: TypeEdition;
  statut!: Statut;
  anneeEdition!: string;
}

export enum TypeEdition {
  speciale = 'special',
  ordinaire = 'ordinaire',
}

export enum Statut {
  attente = 'en_attente',
  cours = 'en_cours',
  termine = 'termine',
  annule = 'annule',
}
