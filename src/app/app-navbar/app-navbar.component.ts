import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../navigator-service/navigator.service';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})

export class AppNavbarComponent implements OnInit {
  private menuVisible : Boolean;
  
  constructor(private navigatorService: NavigatorService, private searchService : SearchService) { }

  ngOnInit() {
    this.menuVisible = false;
  }

  public showMenu() {
    this.menuVisible = true;
  }

  public hideMenu() {
    this.menuVisible = false;
  }

  public openLandingPage() {
    this.navigatorService.view = "start";
    this.navigatorService.title = 'Welcome';
  }

  public openOrders() {
    this.navigatorService.view = 'orders';
    this.navigatorService.title = 'View Orders';
  }

  public openOrderGenerator() {
    this.navigatorService.view = 'orderGenerator';
    this.navigatorService.title = 'Create Order';
  }

  private onKeydown(event) : void {
    if (event.which == 38) { // up arrow
      this.searchService.up();
      return;
    }
    if (event.which == 40) { // dowm arrow
      this.searchService.down();
      return;
    }
    if(this.searchService.searchText) {
      this.searchService.search();
    }
  }
}
