import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditionFormComponent } from './admin/edition/edition-form/edition-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditionListComponent } from './admin/edition-list/edition-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CandidatListComponent } from './admin/candidat/candidat-list/candidat-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EditionFormComponent,
    EditionListComponent,
    CandidatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
