import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categorie-projet',
  templateUrl: './categorie-projet.component.html',
  styleUrls: ['./categorie-projet.component.css']
})
export class CategorieProjetComponent {

  categorieProjet:FormControl = new FormControl('');
}
