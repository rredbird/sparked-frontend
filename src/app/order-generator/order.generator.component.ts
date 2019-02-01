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
  styleUrls: ['./order.generator.component.scss']
})
export class OrderGeneratorComponent implements OnInit {
    public classifiers: ClassifierDto[];
    public order: OrderDto;
    public metrics: MetricDto[];
    public datasets: DatasetDto[];
    public validationMethods: ValidationMethodDto[];

    public classifierHidden: Boolean;
    public metricsHidden: Boolean;
    public datasetsHidden: Boolean;
    public validatorsHidden: Boolean;

    private step: Number = 0;

    constructor(private backendService: BackendService) {
        this.order = new OrderDto();
        this.order.id = 'NEW_ID';
        this.order.name = '';
        this.order.orderStatus = 'WAITING';

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

        this.classifierHidden = true;
        this.metricsHidden = true;
        this.datasetsHidden = true;
        this.validatorsHidden = true;
    }

    ngOnInit() {
    }

    public erstellen() {
    }

    private createOrder() {
        if (this.order.name === '') {
            alert('name is empty');
            return;
        }
        this.backendService.saveOrder(this.order).subscribe(
        data => this.order = data,
        err => console.error(err),
        () => console.log('order created...')
        );
    }

    private next() {
        this.step = +this.step + +1;
    }
}
