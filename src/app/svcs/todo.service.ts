import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos:Todo[]
  public done:boolean = false;

  constructor(private http:HttpClient) {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/')
    .subscribe(td=>{
      this.todos = td;
      localStorage.setItem('todoarr', JSON.stringify(td))
      this.done = true;
      console.log('TodoService subscribe td - ', td);
      
    })
      // console.log('TodoService',localStorage.getItem('todoarr'));
  }
  
}
