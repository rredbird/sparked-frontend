import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { Order } from '../shared/dto/Order';

@Component({
  selector: 'app-order-generator',
  templateUrl: './order.generator.component.html',
  styleUrls: ['./order.generator.component.css']
})
export class OrderGeneratorComponent implements OnInit {
    
    constructor(private backendService:BackendService) {
        this.order = { id:"Not saved" };
    }

    ngOnInit() {
    }

    private createOrder() {
        this.backendService.createOrder().subscribe(
        data => { 
            this.order = data;
        },
        err => { console.error(err) },
        () => console.log('orders loaded...')
        );
    }

    public order : Order;
}
