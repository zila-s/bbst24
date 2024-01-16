import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditionFormComponent } from './admin/edition/edition-form/edition-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditionListComponent } from './admin/edition-list/edition-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CandidatListComponent } from './admin/candidat/candidat-list/candidat-list.component';
import { DialogCandidatComponent } from './admin/candidat/dialog-candidat/dialog-candidat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './admin/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    EditionFormComponent,
    EditionListComponent,
    CandidatListComponent,
    DialogCandidatComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
