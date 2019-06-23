import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BackendService } from './backend-service/backend.service';
import { AppService } from './app.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderGeneratorComponent } from './order-generator/order.generator.component';
import { NavigatorService } from './navigator-service/navigator.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderGeneratorService } from './order-generator-service/order.generator.service';
import { TranslateService } from './translate-service/translate.service';
import { SearchService } from './search-service/search.service';
import { TranslatePipe } from './translate.pipe';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js";

export function setupTranslateFactory(service : TranslateService) : Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    OrdersComponent,
    OrderComponent,
    OrderGeneratorComponent,
    LandingPageComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ClipboardModule,
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
