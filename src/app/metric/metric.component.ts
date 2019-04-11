import { Component, OnInit, Input } from '@angular/core';
import { MetricDto } from '../shared/dto/metricdto.type';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';
import { NavigatorService } from '../navigator-service/navigator.service';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
  private data : MetricDto[];

  constructor(public orderGeneratorService : OrderGeneratorService, private navigatorService : NavigatorService) { 
    this.data = orderGeneratorService.metrics;
  }

  ngOnInit() {

  }
  
  private select(row: MetricDto) {
    if(!row.selected) {
      this.orderGeneratorService.deselectAll(this.orderGeneratorService.metrics);
    }

    row.selected = ! row.selected; 
  }
}
