import { Component, OnInit, Input } from '@angular/core';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type'
@Component({
  selector: 'app-validation-method',
  templateUrl: './validation-method.component.html',
  styleUrls: ['./validation-method.component.css']
})
export class ValidationMethodComponent implements OnInit {

    @Input() validationMethod : ValidationMethodDto;
    
    constructor() { }

    ngOnInit() {
    }

}
