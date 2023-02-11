import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor( private http:HttpClient) { }
  loadData(data:any):Observable<any>{
    return this.http.post('https://dummyjson.com/auth/login',data)
  } 
}
