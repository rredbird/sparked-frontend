import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';
import { NavigatorService } from '../navigator-service/navigator.service';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-order-generator',
  templateUrl: './order.generator.component.html',
  styleUrls: ['./order.generator.component.scss']
})
export class OrderGeneratorComponent implements OnInit {

    constructor(private navigatorService: NavigatorService, private orderGeneratorService: OrderGeneratorService) {
    }

    ngOnInit() {
    }

    private cancel() {
      this.navigatorService.view='orders';
    }
}
