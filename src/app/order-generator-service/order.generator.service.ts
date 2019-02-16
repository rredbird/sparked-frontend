import { Injectable } from '@angular/core';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';
import { BackendService } from '../backend-service/backend.service';

@Injectable()
export class OrderGeneratorService {
  public classifiers: ClassifierDto[];
  public order: OrderDto;
  public metrics: MetricDto[];
  public datasets: DatasetDto[];
  public validationMethods: ValidationMethodDto[];

  constructor(private backendService: BackendService) {
    this.classifiers = new Array<ClassifierDto>();
    this.metrics = new Array<MetricDto>();
    this.datasets = new Array<DatasetDto>();
    this.validationMethods = new Array<ValidationMethodDto>();
    this.order = new OrderDto();

    this.backendService.createOrder().subscribe(
      data => this.order = data,
      err => console.error(err),
      () => console.log('order created')
    );

    this.loadData();
  }

  public newOrder() {
    this.order = new OrderDto();
    this.order.id = 'NEW_ID';
    this.order.name = '';
    this.order.orderStatus = 'WAITING';
  }

  public idOfSelected<T extends { selected : Boolean, id : String }>(list : Array<T>) : String {
    var selected = this.selected<T>(list);
    if (selected) {
        return selected.id;
    }
    return "";
  }

  public nameOfSelected<T extends { selected : Boolean, name : String }>(list : Array<T>) : String {
    var selected = this.selected<T>(list);
    if (selected) {
        return selected.name;
    }
    return "";
  }

  private selected<T extends { selected : Boolean }>(list : Array<T>) : T {
    for(var i = 0; i < list.length; ++i) {
      if(list[i].selected) {
        return list[i];
      }
    }
    return null;
  }

  public createOrder(): void {
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

  public step: Number = 0;
  
  public deselectAll<T extends { selected : Boolean }>(list : Array<T>) {
    if (!list) {
      return;
    }
    for(var i = 0; i < list.length; ++i) {
      list[i].selected = false;
    }
  }

  private loadData() {
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
  }
}
