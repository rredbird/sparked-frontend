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

  public postFile(fileToUpload: File) {
    const endpoint = 'http://localhost:8080/upload';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
      
    return this.http.post(endpoint, formData);
  } 
}
