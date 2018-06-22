import { Component, OnInit, Input } from '@angular/core';
import { DatasetDto } from '../shared/dto/datasetdto.type'

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
    @Input() dataset : DatasetDto;

    constructor() { }

    ngOnInit() {
    }

}
