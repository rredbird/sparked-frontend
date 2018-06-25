import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';

@Component({
  selector: 'app-order-generator',
  templateUrl: './order.generator.component.html',
  styleUrls: ['./order.generator.component.css']
})
export class OrderGeneratorComponent implements OnInit {
    
    constructor(private backendService:BackendService) {
        this.order = new OrderDto();
        this.order.id = "NEWID";

        this.backendService.classifiers().subscribe(
        data => { 
            this.classifiers = data;
        },
        err => { console.error(err) },
        () => console.log('orders loaded...')
        );


        this.backendService.metrics().subscribe(
        data => { 
            this.metrics = data;
        },
        err => { console.error(err) },
        () => console.log('metrics loaded...')
        );

        this.backendService.datasets().subscribe(
        data => { 
            this.datasets = data;
        },
        err => { console.error(err) },
        () => console.log('metrics loaded...')
        );

        this.backendService.validationmethods().subscribe(
        data => { 
            this.validationMethods = data;
        },
        err => { console.error(err) },
        () => console.log('validation methods loaded...')
        );

        this.metricsHidden = true;
        this.datasetsHidden = true;
        this.validatorsHidden = true;
    }

    ngOnInit() {
    }

    public erstellen() {
        
    }

    private createOrder() {
        this.backendService.createOrder(this.order).subscribe(
        data => { 
            this.order = data;
        },
        err => { console.error(err) },
        () => console.log('order created...')
        );
    }

    public classifiers : ClassifierDto[];
    public order : OrderDto;
    public metrics : MetricDto[];
    public datasets : DatasetDto[];
    public validationMethods : ValidationMethodDto[];

    public metricsHidden : Boolean;
    public datasetsHidden : Boolean;
    public validatorsHidden : Boolean;
}
