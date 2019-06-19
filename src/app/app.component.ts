import { Component } from '@angular/core';
import { NavigatorService } from './navigator-service/navigator.service';
import { TranslateService } from './translate-service/translate.service';
import { OrderGeneratorService } from './order-generator-service/order.generator.service';
import { BackendService } from './backend-service/backend.service';
import { OrderDto } from './shared/dto/orderdto.type';
// import { OrderFormatter } from './old/TableDataProvider/orderFormatter';
// import { DatasetFormatter } from './old/TableDataProvider/datasetFormatter';
// import { MetricFormatter } from './old/TableDataProvider/metricFormatter';
// import { ClassifierFormatter } from './old/TableDataProvider/classifierFormatter';
// import { ValidationMethodFormatter } from './old/TableDataProvider/validationMethodFormatter';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent {
    public caption : String;
    public data : Object[];
    public orders : OrderDto[];
    // public dataFormatter : tableDataFormatter<any> = new OrderFormatter();
    public fullsize : Boolean = true;
    public order : OrderDto;

    constructor(private translateService : TranslateService, public navigatorService: NavigatorService, 
        private orderGenerator: OrderGeneratorService, private backendService : BackendService) { 
            
            this.loadOrders();
            translateService.use('en').then(() => { });
    }

    private loadOrders() {
        console.log("loading orders...");
        this.backendService.orders().subscribe(
            data => { 
                this.orders = data;
                this.showOrders();
            },
            err => { console.error(err) },
            () => { }
            );
    }

    private openOrder(component : AppComponent, order : OrderDto) {
        component.fullsize = false;
        component.order = order;
        component.showClassifier();
    }

    private showOrders() {
        this.data = this.orders;
        // this.dataFormatter = new OrderFormatter();
        // this.dataFormatter.onClickDelegate = this.openOrder;
        // this.caption = "LOLCATS";
    }

    // private showDatasets() {
    //     this.data = this.orderGenerator.datasets;    
    //     // this.dataFormatter = new DatasetFormatter();
    //     this.caption = "Please select a dataset";
    // }

    // private showMetrics() {
    //     this.data = this.orderGenerator.metrics;
    //     // this.dataFormatter = new MetricFormatter();
    //     this.caption = "Please select a metric";
    // }

    private showClassifier() {
        if(this.order) {
            this.data = this.orderGenerator.classifiers;//this.order.classifiers///TODO
        } else {
            this.data = this.orderGenerator.classifiers;
        }
        // this.dataFormatter = new ClassifierFormatter();
        this.caption = "Please select classifiers";
    }

    // private showValidation() {
    //     this.data = this.orderGenerator.validationMethods;
    //     // this.dataFormatter = new ValidationMethodFormatter();
    //     this.caption = "Please select a validation method";
    // }

    title = 'app';
}
