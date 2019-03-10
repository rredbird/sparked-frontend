import { Component, OnInit, Input } from '@angular/core';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.scss']
})
export class ClassifierComponent implements OnInit {
    private data : ClassifierDto[];
    
    constructor(public orderGeneratorService : OrderGeneratorService) { 
      this.data = orderGeneratorService.classifiers;
    }

    ngOnInit() {

    }
}
