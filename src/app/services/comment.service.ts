import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  private getDataProduct(response){
    return response.data
  }

  getComment():Observable<any>{
    return this.http.get(environment.urlAddress + 'comments')
  }

  public getProduct(): Observable<Comments[]>{
    return this.http.get<Comments[]>(environment.urlAddress + 'comments').pipe(map(this.getDataProduct))
  }


}
