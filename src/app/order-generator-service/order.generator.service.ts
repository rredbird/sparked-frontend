import { Injectable } from '@angular/core';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';
import { BackendService } from '../backend-service/backend.service';
import { SearchService } from '../search-service/search.service';
import { TaskDto } from '../shared/dto/taskdto.type';

@Injectable()
export class OrderGeneratorService {
  public classifiers: ClassifierDto[];
  public order: OrderDto;
  public metrics: MetricDto[];
  public datasets: DatasetDto[];
  public validationMethods: ValidationMethodDto[];

  constructor(private backendService: BackendService, private searchService: SearchService) {
    this.classifiers = new Array<ClassifierDto>();
    this.metrics = new Array<MetricDto>();
    this.datasets = new Array<DatasetDto>();
    this.validationMethods = new Array<ValidationMethodDto>();
    this.order = this.newOrder();
    
    this.backendService.createOrder().subscribe(
      data => this.order = data,
      err => console.error(err),
      () => console.log('order created')
    );

    this.loadData();
  }

  public newOrder() : OrderDto {
    let order = new OrderDto();
    order.id = '00000000-0000-0000-0000-000000000000';
    order.name = '';
    order.tasks = new Array<TaskDto>();

    return order;
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

  public namesOfSelected<T extends { selected : Boolean, name : String }>(list : Array<T>) : Array<String> {
    var selected = new Array<String>();
    for(var i = 0; i < list.length; ++i) {
      if(list[i].selected) {
        selected.push(list[i].name);
      }
    }
    return selected;
  }

  private selected<T extends { selected : Boolean }>(list : Array<T>) : T {
    for(var i = 0; i < list.length; ++i) {
      if(list[i].selected) {
        return list[i];
      }
    }
    return null;
  }

  public createOrder(title:String, dataset: DatasetDto, classifiers:Array<ClassifierDto>,
        metric:MetricDto, method:ValidationMethodDto, callback : Function): void {
    this.order = this.newOrder();

    if(classifiers != undefined && classifiers.length > 0) {
      classifiers.forEach(element => {
        let task = new TaskDto();
        task.classifier = element;
        task.id = '00000000-0000-0000-0000-000000000000';
        task.status = "new";
        task.metric = metric;
        task.validationMethod = method; 
        task.dataset = dataset;
        
        //this.order.tasks.push(task);
      });
    

      this.backendService.saveOrder(this.order).subscribe(
      data => this.order = data,
      err => console.error(err),
      () => callback()
      );
    }
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
      data => {
        data.forEach(element => {
          this.searchService.registerValue({'key': element.name, 'value': element});
        });
        this.classifiers = data;
      },
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
