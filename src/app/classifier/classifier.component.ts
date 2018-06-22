import { Component, OnInit, Input } from '@angular/core';
import { ClassifierDto } from '../shared/dto/classifierdto.type';

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.css']
})
export class ClassifierComponent implements OnInit {
    @Input() classifier : ClassifierDto;
    
    constructor() { }

    ngOnInit() {
    }

}
