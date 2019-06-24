import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';
import { OrderResultDto } from '../shared/dto/orderresultdto.type';

@Injectable()
export class BackendService {
    private endpoint  : String = 'http://10.0.2.10:8080/';

    constructor(private http: HttpClient) { }

    public postFile(fileToUpload: File) {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.http.post(this.endpoint + 'upload', formData);
    }

    public orders() {
        return this.http.get<OrderDto[]>(this.endpoint + 'orders');
    }

    public order(id: string) {
        return this.http.get<OrderDto>(this.endpoint + 'orders/' + id);
    }

    public saveOrder(order: OrderDto){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.http.post<OrderDto>(this.endpoint + 'orders/save', order, httpOptions);
    }

    public startOrder(order: OrderDto){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.http.post<OrderDto>(this.endpoint + 'orders/start', order, httpOptions);
    }

    public createOrder() {
        return this.http.get<OrderDto>(this.endpoint + 'orders/new');
    }

    public classifiers() {
        return this.http.get<ClassifierDto[]>(this.endpoint + 'classifiers');
    }

    public metrics() {
        return this.http.get<MetricDto[]>(this.endpoint + 'evaluationmetrics');
    }

    public datasets() {
        return this.http.get<DatasetDto[]>(this.endpoint + 'datasets');
    }

    public validationmethods() {
        return this.http.get<ValidationMethodDto[]>(this.endpoint + 'validationmethods');
    }

    public result(id : String) {
        return this.http.get<OrderResultDto>(this.endpoint + 'orders/' + id + '/result');
    }
}
