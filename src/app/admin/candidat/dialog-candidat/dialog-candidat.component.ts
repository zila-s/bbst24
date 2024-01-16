import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Candidat } from 'src/app/_models/candidat';

@Component({
  selector: 'app-dialog-candidat',
  templateUrl: './dialog-candidat.component.html',
  styleUrls: ['./dialog-candidat.component.css'],
})
export class DialogCandidatComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCandidatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Candidat
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
