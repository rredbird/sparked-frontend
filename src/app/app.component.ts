import { Component } from '@angular/core';
import { NavigatorService } from './navigator-service/navigator.service';
import { TranslateService } from './translate-service/translate.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor(private translateService : TranslateService, public navigatorService: NavigatorService) { 
        translateService.use('en').then(() => {
            console.log(translateService.data);
        });
    }
    title = 'app';
}
