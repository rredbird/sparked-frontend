import { Component, OnInit, Input } from '@angular/core';
import { MetricDto } from '../shared/dto/metricdto.type';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {
    @Input() metric : MetricDto;

    constructor() { }

    ngOnInit() {
    }

}
