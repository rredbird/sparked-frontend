import { Injectable } from '@angular/core';
import { OrderDto } from '../shared/dto/orderdto.type';

@Injectable()
export class NavigatorService {

  public view: String = 'start';
  public floating: String = 'none';
  public title: String = 'Welcome';
  public subtitle: String = '';
  public order: OrderDto;
  
  constructor() { }
}
