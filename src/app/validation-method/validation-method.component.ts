import { Component, OnInit, Input } from '@angular/core';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type'
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';
import { NavigatorService } from '../navigator-service/navigator.service';
@Component({
  selector: 'app-validation-method',
  templateUrl: './validation-method.component.html',
  styleUrls: ['./validation-method.component.scss']
})
export class ValidationMethodComponent implements OnInit {
  private data : ValidationMethodDto[];

  constructor(public orderGeneratorService : OrderGeneratorService, private navigatorService : NavigatorService) { 
    this.data = orderGeneratorService.validationMethods;
  }

  ngOnInit() {

  }
  
  private select(row: ValidationMethodDto) {
    if(!row.selected) {
      this.orderGeneratorService.deselectAll(this.orderGeneratorService.validationMethods);
    }

    row.selected = ! row.selected; 
  }
}
