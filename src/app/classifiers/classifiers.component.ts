import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { ClassifierDto } from '../shared/dto/classifierdto.type'

@Component({
  selector: 'app-classifiers',
  templateUrl: './classifiers.component.html',
  styleUrls: ['./classifiers.component.css']
})
export class ClassifiersComponent implements OnInit {

    constructor() { 
        this.selectedClassifier = "";
        this.hidden = true;
    }

    ngOnInit() {
    }

    @Input() public classifiers : ClassifierDto[];

    public selectedClassifier : String;

    public hidden : Boolean;
}
