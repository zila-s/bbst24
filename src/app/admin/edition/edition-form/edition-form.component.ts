import { JsonPipe } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TypeEdition } from 'src/app/_models/edition';

@Component({
  selector: 'app-edition-form',
  templateUrl: './edition-form.component.html',
  styleUrls: ['./edition-form.component.css'],
})
export class EditionFormComponent {
  editionFormGroup!: FormGroup;

  editorElement!: ElementRef;
  // private editor!: EditorJS;

  description: any = [];
  t = TypeEdition.speciale;
  srcResult: any;
  selectedFile: any;
  nomFichier!: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editionFormGroup = this.fb.group({
      theme: new FormControl(''),
      debutSoumission: new FormControl<Date | null>(null, []),
      finSoumission: new FormControl<Date | null>(null),
    });

    // this.initializeEditor();
  }

  getBase64(file: File) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.nomFichier = this.selectedFile.name;
    this.getBase64(this.selectedFile);
  }

  onEditionSubmit() {
    console.log(this.editionFormGroup.value);
  }

  // initializeEditor() {
  //   this.editor = new EditorJS({
  //     minHeight: 200,

  //     holder: this.editorElement.nativeElement,
  //     onReady: () => {
  //       console.log('Editor.js is ready to work!');
  //     },
  //     onChange: (api, event) => {
  //       console.log("Now I know that Editor's content changed!", event);
  //     },
  //     placeholder: 'Let`s write an awesome story!',
  //     data: {
  //       time: 1550476186479,
  //       blocks: [],
  //       version: '2.8.1',
  //     },
  //   });
  //   console.log(this.editor);
  // }

  // showEditorData() {
  //   this.editor
  //     .save()
  //     .then((d) => {
  //       this.description = d.blocks;
  //       console.log(this.description);
  //     })
  //     .catch((error) => {
  //       console.log('Saving failed: ', error);
  //     });
  // }
}

//https://www.helloelva.com/

//https://www.youtube.com/watch?v=RSPfko2kV6s
