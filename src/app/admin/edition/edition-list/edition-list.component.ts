import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Edition } from 'src/app/_models/edition';

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
    "Action"
  ];

  dataSource = listEdition;

  constructor() {}
}

const listEdition: Edition[] = [
  {
    theme: 'Le numerique',
    description: 'test',
    debutSoumission: new Date(2024, 1, 16),
    finSoumission: new Date(2024, 1, 30),
    typeEdition: 'STANDARD',
    anneeEdition: '2024',
  },
  {
    theme: 'Force-N',
    description: 'semaine national de la culture',
    debutSoumission: new Date(2024, 1, 16),
    finSoumission: new Date(2024, 1, 30),
    typeEdition: 'Special',
    anneeEdition: '2024',
  },
  {
    theme: 'Force-N',
    description: 'semaine national de la culture',
    debutSoumission: new Date(2024, 1, 16),
    finSoumission: new Date(2024, 1, 30),
    typeEdition: 'Special',
    anneeEdition: '2024',
  },
  {
    theme: 'Force-N',
    description: 'semaine national de la culture',
    debutSoumission: new Date(2024, 1, 16),
    finSoumission: new Date(2024, 1, 30),
    typeEdition: 'Special',
    anneeEdition: '2024',
  },
];
