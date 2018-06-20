import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})

export class AppNavbarComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
  }

  public openOrders() {
    this.appService.view = "orders";
  }
}
