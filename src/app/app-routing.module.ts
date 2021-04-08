import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component';


const routes: Routes = [
  {
    path: '',
    component: Task3Component
  },
  {
    path: 'task2',
    component: Task2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
