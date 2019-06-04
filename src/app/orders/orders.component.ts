import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { OrderDto } from '../shared/dto/orderdto.type';
import { NavigatorService } from '../navigator-service/navigator.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

constructor(private backendService:BackendService, private navigatorService:NavigatorService) { 
    this.loadOrders();
}

private loadOrders() {
console.log("loading orders...");
    this.backendService.orders().subscribe(
        data => { 
            this.orders = data;
            console.log(this.orders.length + " orders loaded.");
        },
        err => { console.error(err) },
        () => console.log('...orders loaded.')
        );
}

  ngOnInit() {
  }

  public open(order : OrderDto) {
    this.navigatorService.order = order;
    this.navigatorService.view = 'order';
  }

  public orders : OrderDto[];
}
