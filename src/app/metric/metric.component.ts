import { Component, OnInit, Input } from '@angular/core';
import { MetricDto } from '../shared/dto/metricdto.type';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
  @Input() metric : MetricDto;

  constructor(private orderGeneratorService : OrderGeneratorService) { }

  ngOnInit() {
  }

  public toggleSelected() : void {
    if(!this.metric.selected) {
      this.orderGeneratorService.deselectAll(this.orderGeneratorService.metrics);
    }

    this.metric.selected = !this.metric.selected; 
  }
}
