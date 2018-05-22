import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Greeting } from '../shared/dto/Greeting';

@Injectable()
export class BackendService {

  constructor(private http:HttpClient) { }

  public mockValue() : string {
    return "Hello Mock Value!"
  }

  public greeting() {
    return this.http.get<Greeting>('http://localhost:8080/greeting');
  }
}
