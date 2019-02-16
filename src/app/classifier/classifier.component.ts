import { Component, OnInit, Input } from '@angular/core';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.scss']
})
export class ClassifierComponent implements OnInit {
    @Input() classifier : ClassifierDto;
    
    constructor(public orderGeneratorService : OrderGeneratorService) { 
    }

    ngOnInit() {

    }

    public toggleSelected() {
        // multiple selection is allowed!
        // if(!this.classifier.selected) {
        //     this.orderGeneratorService.deselectAll(this.orderGeneratorService.classifiers);
        // }

        this.classifier.selected = !this.classifier.selected; 
    }
}
