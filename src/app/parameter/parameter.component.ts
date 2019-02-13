import { Component, OnInit, Input } from '@angular/core';
import { ParameterDto } from '../shared/dto/parameterdto.type';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {
    @Input() parameter : ParameterDto;
    
    constructor() { }

    ngOnInit() {
    }

}
