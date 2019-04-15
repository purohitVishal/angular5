import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {  HttpClient, HttpHeaders, HttpErrorResponse,HttpResponse,HttpParams,HttpClientXsrfModule} from '@angular/common/http';



@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getCall(){
  	console.log('inside seerice');
  	var x = this.http.get("https://jsonplaceholder.typicode.com/posts");
  	console.log(x);
  }
}
