import { Component } from '@angular/core';
import { BackendService } from '../app/backend-service/backend.service';
import { AppService } from '../app/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private backendService: BackendService, public appService: AppService) { 
        backendService.greeting().subscribe(
            data => { 
                this.greeting = data.content + " this is greeting number " + data.id 
            },
            err => { console.error(err) },
            () => console.log('greeting loaded...')
        );
        this.greeting
    }
    title = 'app';
    greeting : string = "No greeting received";
}
