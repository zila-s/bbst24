import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-liste-projet',
  templateUrl: './liste-projet.component.html',
  styleUrls: ['./liste-projet.component.css'],
})
export class ListeProjetComponent {
  displayedColumns: string[] = ['theme', 'candidat'];
  dataSource = new MatTableDataSource<InfoProjet>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface InfoProjet {
  themeProjet: string;

  nomCandidat: string;
}

const ELEMENT_DATA: InfoProjet[] = [
  { themeProjet: 'Hydrogen', nomCandidat: 'H' },
  { themeProjet: 'Helium', nomCandidat: 'He' },
  { themeProjet: 'Lithium', nomCandidat: 'Li' },
  { themeProjet: 'Beryllium', nomCandidat: 'Be' },
  { themeProjet: 'Boron', nomCandidat: 'B' },
  { themeProjet: 'Carbon', nomCandidat: 'C' },
  { themeProjet: 'Nitrogen', nomCandidat: 'N' },
  { themeProjet: 'Oxygen', nomCandidat: 'O' },
  { themeProjet: 'Fluorine', nomCandidat: 'F' },
  { themeProjet: 'Neon', nomCandidat: 'Ne' },
  { themeProjet: 'Sodium', nomCandidat: 'Na' },
  { themeProjet: 'Magnesium', nomCandidat: 'Mg' },
  { themeProjet: 'Aluminum', nomCandidat: 'Al' },
  { themeProjet: 'Silicon', nomCandidat: 'Si' },
  { themeProjet: 'Phosphorus', nomCandidat: 'P' },
  { themeProjet: 'Sulfur', nomCandidat: 'Cl' },
  { themeProjet: 'Argon', nomCandidat: 'Ar' },
  { themeProjet: 'Potassium', nomCandidat: 'K' },
  { themeProjet: 'Calcium', nomCandidat: 'Ca' },
];
