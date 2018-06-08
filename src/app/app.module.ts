import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BackendService } from './backend-service/backend.service';
import { HttpClient } from 'selenium-webdriver/http';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CsvUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
