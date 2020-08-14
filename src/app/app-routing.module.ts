import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
