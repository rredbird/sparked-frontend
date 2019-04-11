import { Component, OnInit, Input } from '@angular/core';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';
import { NavigatorService } from '../navigator-service/navigator.service';

@Component({
  selector: 'app-classifier',
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.scss']
})
export class ClassifierComponent implements OnInit {
  private data : ClassifierDto[];
  private detailRow : ClassifierDto;
  
  constructor(public orderGeneratorService : OrderGeneratorService, private navigatorService : NavigatorService) { 
    this.data = orderGeneratorService.classifiers;
  }

  ngOnInit() {

  }
  
  private select(row: ClassifierDto) {
    if(this.detailRow !== row) {
      this.detailRow = row;
    } else {
      this.detailRow = null;
    }
  }
}
