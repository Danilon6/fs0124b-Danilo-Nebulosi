import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct, iRoot } from './Models/dummy-products';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyProductService {


  apiUrl:string = "https://dummyjson.com/products"

  constructor(private http:HttpClient){}

getAllProducts(){
  return this.http.get<iRoot>(this.apiUrl)
}

}
