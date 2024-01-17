import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatListComponent } from './admin/candidat/candidat-list/candidat-list.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';

const routes: Routes = [
  {path:'',component:DashbordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
