import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorie-projet',
  templateUrl: './categorie-projet.component.html',
  styleUrls: ['./categorie-projet.component.css']
})
export class CategorieProjetComponent {

  categorieForm = new FormGroup({
    categorieProjet : new FormControl('',[Validators.required])
  })

  

  enregistrer(){
    console.log(this.categorieForm.get('categorieProjet')?.value)
  }
}
