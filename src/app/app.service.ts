import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

constructor() { 
    this.view = "dashboard";
}

  public view : String;
}
