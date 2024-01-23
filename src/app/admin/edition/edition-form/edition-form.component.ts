import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edition-form',
  templateUrl: './edition-form.component.html',
  styleUrls: ['./edition-form.component.css']
})
export class EditionFormComponent {
  editionFormGroup!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit():void{
    this.editionFormGroup = this.fb.group({

    });
  }
}

//https://www.helloelva.com/

//https://www.youtube.com/watch?v=RSPfko2kV6s