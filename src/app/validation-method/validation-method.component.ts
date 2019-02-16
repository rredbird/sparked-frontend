import { Component, OnInit, Input } from '@angular/core';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type'
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';
@Component({
  selector: 'app-validation-method',
  templateUrl: './validation-method.component.html',
  styleUrls: ['./validation-method.component.scss']
})
export class ValidationMethodComponent implements OnInit {

    @Input() validationMethod : ValidationMethodDto;
    
    constructor(private orderGeneratorService : OrderGeneratorService) { 
    }

    ngOnInit() {
    }

    public toggleSelected() {
      if(!this.validationMethod.selected) {
        this.orderGeneratorService.deselectAll(this.orderGeneratorService.validationMethods);
      }
  
      this.validationMethod.selected = !this.validationMethod.selected; 
    }
}
