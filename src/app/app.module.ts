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
// import { MetricComponent } from './old/metric/metric.component';
// import { ValidationMethodComponent } from './old/validation-method/validation-method.component';
// import { ParameterComponent } from './old/parameter/parameter.component';
import { NavigatorService } from './navigator-service/navigator.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderGeneratorService } from './order-generator-service/order.generator.service';
import { TranslateService } from './translate-service/translate.service';
import { SearchService } from './search-service/search.service';
import { TranslatePipe } from './translate.pipe';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';

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
    // ParameterComponent,
    ClassifierComponent,
    // MetricComponent,
    // ValidationMethodComponent,
    LandingPageComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ClipboardModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
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
