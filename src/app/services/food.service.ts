import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

posts;

  constructor(private http: HttpClient) { 
  	this.http.get("https://www.themealdb.com/api/json/v1/1/categories.php").subscribe((value: any)=>{
  	this.posts = value;
  	console.log(this.posts)
  	})
  }
}
