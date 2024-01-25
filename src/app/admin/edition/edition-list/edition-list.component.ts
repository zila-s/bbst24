import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Edition, Statut, TypeEdition } from 'src/app/_models/edition';

@Component({
  selector: 'app-edition-list',
  templateUrl: './edition-list.component.html',
  styleUrls: ['./edition-list.component.css'],
})
export class EditionListComponent {
  displayedColumns: string[] = [
    'Theme',
    'Description',
    'Debut de soumission',
    'Fin de soumission',
    "Type d'Edition",
    "Annee d'Edition",
    'Action',
  ];

  dataSource = listEdition;
  srcResult: any;
  constructor() {}
  ngOnInit(): void {
    console.log(listEdition);
  }

  
}

const listEdition: Edition[] = [
  {
    theme: 'Le numerique',
    description: 'test',
    debutSoumission: new Date(2024, 1, 16),
    finSoumission: new Date(2024, 1, 30),
    typeEdition: TypeEdition.ordinaire,
    anneeEdition: '2024',
    statut: Statut.attente,
    categories: [0, 1, 2],
  },
  {
    theme: 'Force-N',
    description: 'semaine national de la culture',
    debutSoumission: new Date(2024, 1, 16),
    finSoumission: new Date(2024, 1, 30),
    typeEdition: TypeEdition.speciale,
    anneeEdition: '2024',
    statut: Statut.attente,
    categories: [0, 1, 2],
  },
  {
    theme: 'Force-N',
    description: 'semaine national de la culture',
    debutSoumission: new Date(2024, 1, 16),
    finSoumission: new Date(2024, 1, 30),
    typeEdition: TypeEdition.ordinaire,
    anneeEdition: '2024',
    statut: Statut.attente,
    categories: [0, 1, 2],
  },
  {
    theme: 'Force-N',
    description: 'semaine national de la culture',
    debutSoumission: new Date(2024, 1, 16),
    finSoumission: new Date(2024, 1, 30),
    typeEdition: TypeEdition.ordinaire,
    anneeEdition: '2024',
    statut: Statut.attente,
    categories: [0, 1, 2],
  },
];
