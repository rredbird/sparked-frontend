import { Component, OnInit, Input } from '@angular/core';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { LocalizationService } from '../localization-service/localization.service';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.scss']
})
export class ClassifierComponent implements OnInit {
    @Input() classifier : ClassifierDto;
    
    constructor(private localize : LocalizationService, public orderGeneratorService : OrderGeneratorService) { 
    }

    ngOnInit() {

    }

    public toggleSelected() {
        if(!this.classifier.selected) {
            this.orderGeneratorService.deselectAll(this.orderGeneratorService.classifiers);
        }

        this.classifier.selected = !this.classifier.selected; 
    }
}
