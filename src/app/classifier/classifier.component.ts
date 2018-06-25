import { Component, OnInit, Input } from '@angular/core';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { LocalizationService } from '../localization-service/localization.service';

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.css']
})
export class ClassifierComponent implements OnInit {
    @Input() classifier : ClassifierDto;
    
    constructor(public localize : LocalizationService) { 
        this.expanded = false;
        this.selected = false;
    }

    ngOnInit() {

    }

    public toggleSelected() {
        this.selected = !this.selected; 
        this.expanded = this.selected;
        this.classifier.selected = this.selected;
    }

    public expanded : Boolean;
    public selected : Boolean;
}
