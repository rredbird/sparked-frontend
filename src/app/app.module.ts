import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BackendService } from './backend-service/backend.service';
import { AppService } from './app.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderGeneratorComponent } from './order-generator/order.generator.component';
import { TaskComponent } from './task/task.component';
import { ClassifierComponent } from './classifier/classifier.component';
import { MetricComponent } from './metric/metric.component';
import { DatasetComponent } from './dataset/dataset.component';
import { ValidationMethodComponent } from './validation-method/validation-method.component';
import { ParameterComponent } from './parameter/parameter.component';
import { NavigatorService } from './navigator-service/navigator.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderGeneratorService } from './order-generator-service/order.generator.service';
import { TranslateService } from './translate-service/translate.service';
import { SearchService } from './search-service/search.service';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(service : TranslateService) : Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FileUploadComponent,
    OrdersComponent,
    OrderComponent,
    OrderGeneratorComponent,
    TaskComponent,
    ParameterComponent,
    ClassifierComponent,
    MetricComponent,
    DatasetComponent,
    ValidationMethodComponent,
    LandingPageComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BackendService, AppService, TranslateService, NavigatorService, OrderGeneratorService, SearchService, {
    provide: APP_INITIALIZER,
    useFactory: setupTranslateFactory,
    deps: [TranslateService],
    multi: true    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
