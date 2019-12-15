import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './comps/todo/todo.component';
import { AddTodoComponent } from './forms/add-todo/add-todo.component';
import { UserComponent } from './comps/user/user.component';
import { AddUserComponent } from './forms/add-user/add-user.component';


import { SearchTodoPipe } from './pipes/search-todo.pipe';

const routes: Routes = [
  {path: 'todo', component:TodoComponent},
  {path: 'tdSearch', component:SearchTodoPipe},
  {path: 'addTodo', component:AddTodoComponent},
  {path: 'user', component:UserComponent},
  {path: 'addUser', component:AddUserComponent},

  {path: '', redirectTo:'user',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
