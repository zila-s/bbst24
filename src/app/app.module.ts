import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditionFormComponent } from './admin/edition/edition-form/edition-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditionListComponent } from './admin/edition/edition-list/edition-list.component';
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
import { MatDividerModule } from '@angular/material/divider';
import { CategorieProjetComponent } from './admin/projet/categorie-projet/categorie-projet.component';
import { ListeProjetComponent } from './admin/projet/liste-projet/liste-projet.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { GestionEditionComponent } from './admin/edition/gestion-edition/gestion-edition.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EditionFormComponent,
    EditionListComponent,
    CandidatListComponent,
    DialogCandidatComponent,
    LoginComponent,
    CategorieProjetComponent,
    ListeProjetComponent,
    SideBarComponent,
    DashbordComponent,
    GestionEditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterLink,
    RouterLinkActive,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
