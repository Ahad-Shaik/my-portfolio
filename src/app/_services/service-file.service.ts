import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {

  url="https://newsapi.org/v2/everything?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=0c97ae40314b4e4a9a111fc9486e51e7";
  url2="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getServicedata(){
    return this.http.get(this.url2);
  }
}
