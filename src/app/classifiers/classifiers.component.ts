import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { ClassifierDto } from '../shared/dto/classifierdto.type'

@Component({
  selector: 'app-classifiers',
  templateUrl: './classifiers.component.html',
  styleUrls: ['./classifiers.component.css']
})
export class ClassifiersComponent implements OnInit {

    constructor(public backendService : BackendService) { 
        this.backendService.classifiers().subscribe(
        data => { 
            this.classifiers = data;
        },
        err => { console.error(err) },
        () => console.log('orders loaded...')
        );
    }

    ngOnInit() {
    }

    public classifiers : ClassifierDto[];
}
