import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { TodoService } from 'src/app/svcs/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  userId = new FormControl('')
  title = new FormControl('')
  completed = new FormControl('')
  todoId = 201;
  constructor(private todoSvc:TodoService) { }

  ngOnInit() {
  }
  addTodo(){
    // console.log('addTodo start', this.todoSvc.todos);
    
     //this.todoSvc.todos.length
    let newTodo = JSON.stringify({
      userId:this.userId.value,
      id:this.todoId++,
      title:this.title.value,
      completed:this.completed.value});

    console.log('Added todo', newTodo);
    this.userId = new FormControl('')
    this.title = new FormControl('')
    this.completed = new FormControl('')
    this.addToLocalStg(newTodo);
  }
  addToLocalStg(newTD:string){
    this.todoSvc.todos.push(JSON.parse(newTD));
    // let arrToString = JSON.stringify(this.todoSvc.todos)
    localStorage.setItem(
      'todoarr', localStorage.getItem('todoarr').slice(0,-1) + ',' + newTD + ']');
    console.log('addToLocalStg ', localStorage.getItem('todoarr'));
    
  }
}
