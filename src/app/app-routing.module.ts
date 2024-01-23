import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatListComponent } from './admin/candidat/candidat-list/candidat-list.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { GestionEditionComponent } from './admin/edition/gestion-edition/gestion-edition.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'gestion-edition', component: GestionEditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
