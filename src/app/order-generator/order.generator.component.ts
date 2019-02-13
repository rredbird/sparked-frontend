import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';
import { NavigatorService } from '../navigator-service/navigator.service';

@Component({
  selector: 'app-order-generator',
  templateUrl: './order.generator.component.html',
  styleUrls: ['./order.generator.component.scss']
})
export class OrderGeneratorComponent implements OnInit {
    public classifiers: ClassifierDto[];
    public order: OrderDto;
    public metrics: MetricDto[];
    public datasets: DatasetDto[];
    public validationMethods: ValidationMethodDto[];

    public metricsHidden: Boolean;
    public datasetsHidden: Boolean;
    public validatorsHidden: Boolean;

    private step: Number = 0;

    public alert;

    constructor(private backendService: BackendService, private navigatorService: NavigatorService) {
        this.alert = window.alert;
        this.order = new OrderDto();
        this.order.id = 'NEW_ID';
        this.order.name = '';
        this.order.orderStatus = 'WAITING';
        this.navigatorService.subtitle = 'Title';

        this.backendService.createOrder().subscribe(
            data => this.order = data,
            err => console.error(err),
            () => console.log('order created')
        );

        this.backendService.classifiers().subscribe(
        data => this.classifiers = data,
        err => console.error(err),
        () => console.log('orders loaded...')
        );


        this.backendService.metrics().subscribe(
        data => this.metrics = data,
        err => console.error(err),
        () => console.log('metrics loaded...')
        );

        this.backendService.datasets().subscribe(
        data => this.datasets = data,
        err => console.error(err),
        () => console.log('metrics loaded...')
        );

        this.backendService.validationmethods().subscribe(
        data => this.validationMethods = data,
        err => console.error(err),
        () => console.log('validation methods loaded...')
        );

        this.metricsHidden = true;
        this.datasetsHidden = true;
        this.validatorsHidden = true;
    }

    ngOnInit() {
    }

    private createOrder() {
        if (this.order.name === '') {
            alert('name is empty');
            return;
        }
        this.order.classifiers = this.classifiers.filter(function (classifier) {
            return classifier.selected == true;
        });
        this.backendService.saveOrder(this.order).subscribe(
        data => this.order = data,
        err => console.error(err),
        () => console.log('order created...')
        );
    }

    private next() {
        switch(this.step) {
            case 0: 
                this.step = 1;
                this.navigatorService.subtitle = 'Classifier';
                break;
            case 1: 
                this.step = 2;
                this.navigatorService.subtitle = 'Metric';
                break;
            case 2: 
                this.step = 3
                this.navigatorService.subtitle = 'Dataset';
                break;
            default: 
                this.step = 0;
                this.navigatorService.subtitle = '';
                break;
        }
    }
    private previous() {
        this.step = +this.step - 1;
    }
}
