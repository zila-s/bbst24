import { Component } from '@angular/core';
import { Candidat } from 'src/app/_models/candidat';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css'],
})
export class CandidatListComponent {
  displayedColumns: string[] = [
    'Nom',
    'Prenom',
    'Email',
    'Telephone',
    'Localite',
    'Username',
    'Action',
  ];

  dataSource = listCandidat;
}

const listCandidat: Candidat[] = [
  {
    nom: 'Sawadogo',
    prenom: 'Bernard',
    email: 'bernard@exemple.com',
    telephone: '+226 01050407',
    localite: 'Ouagdougou',
    username: 'Salameche',
  },
  {
    nom: 'Sawadogo',
    prenom: 'Bernard',
    email: 'bernard@exemple.com',
    telephone: '+226 01050407',
    localite: 'Ouagdougou',
    username: 'Salameche',
  },
  {
    nom: 'Sawadogo',
    prenom: 'Bernard',
    email: 'bernard@exemple.com',
    telephone: '+226 01050407',
    localite: 'Ouagdougou',
    username: 'Salameche',
  },
  {
    nom: 'Traore',
    prenom: 'Bernard',
    email: 'bernard@exemple.com',
    telephone: '+226 01050407',
    localite: 'Ouagdougou',
    username: 'Salameche',
  },
  {
    nom: 'Sawadogo',
    prenom: 'Bernard',
    email: 'bernard@exemple.com',
    telephone: '+226 01050407',
    localite: 'Ouagdougou',
    username: 'Salameche',
  },
  {
    nom: 'Sawadogo',
    prenom: 'Bernard',
    email: 'bernard@exemple.com',
    telephone: '+226 01050407',
    localite: 'Ouagdougou',
    username: 'Salameche',
  },
];
