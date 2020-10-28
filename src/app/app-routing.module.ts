import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MissionComponent} from './mission/mission.component'


const routes: Routes = [
  { 
    path: 'mission',
    component: MissionComponent,
  },
  {
    path: '',
    redirectTo: 'mission', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
