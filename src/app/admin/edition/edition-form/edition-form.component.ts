import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edition-form',
  templateUrl: './edition-form.component.html',
  styleUrls: ['./edition-form.component.css'],
})
export class EditionFormComponent {
  editionFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editionFormGroup = this.fb.group({
      theme: new FormControl(''),
      debutSoumission: new FormControl<Date | null>(null),
      finSoumission: new FormControl<Date | null>(null),
    });
  }

  onEditionSubmit() {
    console.log(this.editionFormGroup.value);
  }
}

//https://www.helloelva.com/

//https://www.youtube.com/watch?v=RSPfko2kV6s
