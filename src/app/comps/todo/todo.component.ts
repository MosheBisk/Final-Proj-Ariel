import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/svcs/todo.service';
import { BaseService } from 'src/app/svcs/base.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public todoSvc:TodoService,) {
     
    // console.log('TodoComponent ',  this.todoSvc.todos);
  }

  ngOnInit() {
  }
  // ngDoCheck(){
  //   console.log('TodoComponent ngDoCheck ', this);
    
  // }
  mycheck(place:string){
    console.log('TodoComponent mycheck ', place);
  }
}
