import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map  } from 'rxjs/operators';
import { User } from '../../models/user';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  private getProduct(response) {
    return response.data
  }
  private getProductid(response) {
    return response.data
  }

  /**
   * postUser
   */
  public postUser(newUser:User):Observable<boolean>{
    return this.http.post(environment.urlAddress + 'register', newUser)
    .pipe(map(result => true))
  }

}
