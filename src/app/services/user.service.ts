import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient:HttpClient) { }

  signup(user:User){
        return this.httpClient.post(environment.urlAddress + 'register' + user,{})
    }

  //get user list
  getUserList():Observable<any>{
    return this.httpClient.get<any[]>(environment.urlAddress+'users');
  }

  }
