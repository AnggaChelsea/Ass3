import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private $http: HttpClient) { }

  getAllProducts(){
    this.$http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  }
}
