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
    order.evaluationId = '00000000-0000-0000-0000-000000000000';
    order._id = '00000000-0000-0000-0000-000000000000';
    order.name = '';
    order.tasks = new Array<TaskDto>();
    order.status = "new";

    return order;
  }

  public start() {
    this.backendService.startOrder(this.order).subscribe(
      data => this.order = data,
      err => console.error(err),
      () => console.log("order started")
      );
  }

  public createOrder(title:String, dataset: DatasetDto, classifiers:Array<ClassifierDto>,
        metric:MetricDto, method:ValidationMethodDto): void {
    this.order = this.newOrder();

    this.order.status = "new";
    this.order.name = title;
    
    if(classifiers != undefined && classifiers.length > 0) {
      classifiers.forEach(element => {
        let task = new TaskDto();
        task.classifier = element;
        task.id = '00000000-0000-0000-0000-000000000000';
        task.metric = metric;
        task.validationMethod = method; 
        task.dataset = dataset;
        task.status = "new";
        
        this.order.tasks.push(task);
      });
    
      console.log(this.order.status);
      this.backendService.saveOrder(this.order).subscribe(
      data => this.order = data,
      err => console.error(err),
      () => console.log("order saved: " + this.order.evaluationId)
      );
    }
  }

  public step: Number = 0;

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
