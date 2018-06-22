import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { OrderDto } from '../shared/dto/orderdto.type';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

constructor(private backendService:BackendService) { 
    this.loadOrders();
}

private loadOrders() {
console.log("loading orders...");
    this.backendService.orders().subscribe(
        data => { 
            this.orders = data;
        },
        err => { console.error(err) },
        () => console.log('orders loaded...')
        );
}

  ngOnInit() {
  }

  public orders : OrderDto[];
}
