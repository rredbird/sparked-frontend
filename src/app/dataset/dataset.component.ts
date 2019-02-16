import { Component, OnInit, Input } from '@angular/core';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.scss']
})
export class DatasetComponent implements OnInit {
    @Input() dataset : DatasetDto;

    constructor(private orderGeneratorService : OrderGeneratorService) { }

    ngOnInit() {
    }

    public toggleSelected() : void {
      if(!this.dataset.selected) {
        this.orderGeneratorService.deselectAll(this.orderGeneratorService.datasets);
      }
  
      this.dataset.selected = !this.dataset.selected; 
    }
}
