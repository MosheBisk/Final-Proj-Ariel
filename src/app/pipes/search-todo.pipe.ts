import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'searchTodo'
})
export class SearchTodoPipe implements PipeTransform {

  transform(value: Todo[], arg1:any, arg2:any): any {
    if (arg1 && arg2) {
      let s = value.filter(param=>
        arg1 == param.userId && arg2 == param.title
      )
      console.log('SearchTodoPipe s ', s);
      return s;
    }
    
    return null;
  }

}
