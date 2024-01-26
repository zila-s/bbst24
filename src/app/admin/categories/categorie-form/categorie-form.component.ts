import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css'],
})
export class CategorieFormComponent {
  categorieForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.categorieForm = this.fb.group({
      nom: new FormControl(''),
      description: new FormControl(''),
    });
  }
}
