import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../navigator-service/navigator.service';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private navigator : NavigatorService, private orderGenerator : OrderGeneratorService) { }

  ngOnInit() {
  }

  private create() {
    this.navigator.view = 'create';
    this.navigator.order = this.orderGenerator.newOrder();
  }
}
