import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'genSearch'
})
export class GenSearchPipe<T> implements PipeTransform {

  // value: T;
  // constructor(value: T) {
  //     this.value = value;
  // }
  // typeof(): string {
  //     return typeof this.value;       
  // }

  transform(value:T[], field1:string, arg1:any): any {
    
    if (arg1) {
      let myTarget = value.filter(param=>{
        arg1 == param[field1]
        console.log(param);
      })
      console.log('SearchTodoPipe myTarget ', myTarget);
      return myTarget;
    }
    
    return null;
  }

}
