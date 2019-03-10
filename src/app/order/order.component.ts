import { Component, OnInit, Input } from '@angular/core';
import { OrderDto } from '../shared/dto/orderdto.type';
import { NavigatorService } from '../navigator-service/navigator.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order : OrderDto;

  constructor(private navigatorService : NavigatorService) { 
    this.order = navigatorService.order;
  }

  ngOnInit() {
  }

  private clone() {
    this.navigatorService.view = "create";
    this.navigatorService.order = this.order;
  }
}

