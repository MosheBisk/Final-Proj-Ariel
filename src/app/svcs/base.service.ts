import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class BaseService<T> {

  protected dataSubject:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  data:Observable<T[]> = this.dataSubject.asObservable()

  constructor(protected http:HttpClient, protected api:string) {
    console.log('BaseService ctor');
    this.http.get<T[]>('https://jsonplaceholder.typicode.com/' + api)
    .subscribe(td=>{
      this.dataSubject.next(td);
      localStorage.setItem(api, JSON.stringify(td))
    console.log('BaseService arr ', this.dataSubject.value);
    })
  }

  addNewItem(item:T){
    let newArr =  this.dataSubject.value.push(item);
    localStorage[this.api] = JSON.stringify(newArr);
  }
}
