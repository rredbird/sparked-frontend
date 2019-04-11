import { Component, OnInit, Input } from '@angular/core';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';
import { NavigatorService } from '../navigator-service/navigator.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {
  private data : DatasetDto[];

  constructor(public orderGeneratorService : OrderGeneratorService, private navigatorService : NavigatorService) { 
    this.data = orderGeneratorService.datasets;
  }

  ngOnInit() {

  }
  
  private select(row: DatasetDto) {
    if(!row.selected) {
      this.orderGeneratorService.deselectAll(this.orderGeneratorService.datasets);
    }

    row.selected = ! row.selected; 
  }
}
