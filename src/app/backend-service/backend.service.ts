import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';

@Injectable()
export class BackendService {

    constructor(private http: HttpClient) { }

    public postFile(fileToUpload: File) {
        const endpoint = 'http://localhost:8080/upload';
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.http.post(endpoint, formData);
    }

    public orders() {
        return this.http.get<OrderDto[]>('http://localhost:8080/orders');
    }

    public order(id: string) {
        return this.http.get<OrderDto>('http://localhost:8080/orders/' + id);
    }

    public saveOrder(order: OrderDto){
        return this.http.post<OrderDto>('http://localhost:8080/orders/save', order);
    }

    public createOrder() {
        return this.http.get<OrderDto>('http://localhost:8080/orders/new');
    }

    public classifiers() {
        return this.http.get<ClassifierDto[]>('http://localhost:8080/classifiers');
    }

    public metrics() {
        return this.http.get<MetricDto[]>('http://localhost:8080/evaluationmetrics');
    }

    public datasets() {
        return this.http.get<DatasetDto[]>('http://localhost:8080/datasets');
    }

    public validationmethods() {
        return this.http.get<ValidationMethodDto[]>('http://localhost:8080/validationmethods');
    }
}
