import { Component, OnInit, Input } from '@angular/core';
import { OrderDto } from '../shared/dto/orderdto.type';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
    @Input() order : OrderDto;

    constructor() { }

    ngOnInit() {
    }
}

