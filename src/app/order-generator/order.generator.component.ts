import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';
import { NavigatorService } from '../navigator-service/navigator.service';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';

@Component({
  selector: 'app-order-generator',
  templateUrl: './order.generator.component.html',
  styleUrls: ['./order.generator.component.scss']
})
export class OrderGeneratorComponent implements OnInit {

    constructor(private navigatorService: NavigatorService, private orderGeneratorService: OrderGeneratorService) {

        this.navigatorService.subtitle = 'Title';
    }

    ngOnInit() {
    }

    private next() {
        switch(this.orderGeneratorService.step) {
          case 0: 
            this.orderGeneratorService.step = 1;
            this.navigatorService.subtitle = 'Classifier';
            break;
          case 1: 
            this.orderGeneratorService.step = 2;
            this.navigatorService.subtitle = 'Metric';
            break;
          case 2: 
            this.orderGeneratorService.step = 3
            this.navigatorService.subtitle = 'Dataset';
            break;
          default: 
            this.orderGeneratorService.step = 0;
            this.navigatorService.subtitle = '';
            break;
        }
      }
      private previous() {
        this.orderGeneratorService.step = +this.orderGeneratorService.step - 1;
      }
}
