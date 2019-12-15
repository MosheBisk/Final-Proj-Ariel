import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './comps/todo/todo.component';
import { SearchTodoPipe } from './pipes/search-todo.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTodoComponent } from './forms/add-todo/add-todo.component';
import { UserComponent } from './comps/user/user.component';
import { AddUserComponent } from './forms/add-user/add-user.component';
import { GenSearchPipe } from './pipes/gen-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SearchTodoPipe,
    AddTodoComponent,
    UserComponent,
    AddUserComponent,
    GenSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
