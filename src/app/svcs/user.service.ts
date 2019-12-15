import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(protected http:HttpClient) {
    super(http, 'users');
    console.log('UserService ctor');
    
  }
}
