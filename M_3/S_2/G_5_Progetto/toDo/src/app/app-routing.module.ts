import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ToDoDoneComponent } from './pages/to-do-done/to-do-done.component';
import { ToDoUndoneComponent } from './pages/to-do-undone/to-do-undone.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
  },
  {
    path: 'toDoDone',
    component: ToDoDoneComponent
  },
  {
    path: 'toDoUnDone',
    component: ToDoUndoneComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
