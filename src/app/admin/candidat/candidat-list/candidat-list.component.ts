import { Component } from '@angular/core';
import { Candidat } from 'src/app/_models/candidat';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DialogCandidatComponent } from '../dialog-candidat/dialog-candidat.component';

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

  animal: any;
  constructor(public dialog: MatDialog) {}

  openDialog(candidat: Candidat): void {
    const dialogRef = this.dialog.open(DialogCandidatComponent, {
      data: {
        nom: candidat.nom,
        prenom: candidat.prenom,
        email: candidat.email,
        telephone: candidat.telephone,
        localite: candidat.localite,
        username: candidat.username,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log(this.animal);
    });
  }
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
