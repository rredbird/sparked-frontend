import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../navigator-service/navigator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})

export class AppNavbarComponent implements OnInit {

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
  }

  public openOrders() {
    this.navigatorService.view = 'orders';
  }

  public openOrderGenerator() {
    this.navigatorService.view = 'orderGenerator';
  }
}
