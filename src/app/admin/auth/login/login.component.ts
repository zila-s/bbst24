import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  hide = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      mdp: new FormControl('', [Validators.required]),
    });
  }

  getEmail() {
    return this.loginForm.get('email');
  }

  getMdp() {
    return this.loginForm.get('mdp');
  }

  getErrorEmail() {
    if (this.getEmail()?.hasError('required')) {
      return 'Email is required';
    }
    return this.getEmail()?.hasError('email') ? 'Not a valid mail' : '';
  }

  onLogin() {
    console.log(this.getEmail()?.value);
    console.log(this.getMdp()?.value);
  }
}

//https://rmcsport.bfmtv.com/football/coupe-d-afrique-des-nations/direct-coupe-d-afrique-des-nations-suivez-burkina-faso-mauritanie-en-live_LS-202401160588.html
