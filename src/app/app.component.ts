import { Component } from '@angular/core';
import { NavigatorService } from './navigator-service/navigator.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(public navigatorService: NavigatorService) { 
    }
    title = 'app';
}
