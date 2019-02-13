import { Injectable } from '@angular/core';

@Injectable()
export class NavigatorService {

  public view: String = 'start';
  public title: String = 'Welcome';
  public subtitle: String = ''

  constructor() { }
}
