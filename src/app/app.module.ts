import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BackendService } from './backend-service/backend.service';
import { AppService } from './app.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderGeneratorComponent } from './order-generator/order.generator.component';
import { TaskComponent } from './task/task.component';
import { ClassifiersComponent } from './classifiers/classifiers.component';
import { ClassifierComponent } from './classifier/classifier.component';
import { MetricComponent } from './metric/metric.component';
import { DatasetComponent } from './dataset/dataset.component';
import { ValidationMethodComponent } from './validation-method/validation-method.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FileUploadComponent,
    OrdersComponent,
    OrderComponent,
    OrderGeneratorComponent,
    TaskComponent,
    ClassifiersComponent,
    ClassifierComponent,
    MetricComponent,
    DatasetComponent,
    ValidationMethodComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BackendService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
