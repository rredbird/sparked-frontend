import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { OrderDto } from '../shared/dto/orderdto.type';
import { NavigatorService } from '../navigator-service/navigator.service';
import { BackendService } from '../backend-service/backend.service';
import { Chart } from 'chart.js';
import { ClipboardService } from 'ngx-clipboard';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: any;

  private order() : OrderDto {
    return this.orderGeneratorService.order;
  }

  result;
  output : String = "";  

  constructor(private backendService : BackendService, 
      private navigatorService : NavigatorService,
      private orderGeneratorService : OrderGeneratorService, 
      private _clipboardService: ClipboardService) { 
    
    this.result = "STOP";
    this.backendService = backendService;
    console.log(this.order().id + " = " + this.order.name);
    ///TODO run with task support
    this.backendService.result(this.order().id).subscribe(
    data => { 
        this.result = data;
        this.showChart();
    },
    err => { console.error(err) },
    () => console.log('result loaded...')
    );
  }

  ngOnInit() {
  }

  copyIdToClipboard() {
    this._clipboardService.copyFromContent(this.order().id.toString());
  }

  private showChart() {
    var labels : String[] = new Array<String>();
    var meanData : Number[] = new Array<Number>();
    if(this.result == null) {
      return;
    }
    this.result.bestConfiguration.metrics.forEach(metric => {
      meanData.push(metric.mean[0]);
      labels.push(metric.id);
    });

    //let meanData = [3,2];    
    //let labels = [ 1,2 ];

    this.output += "showChart\n";
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: meanData, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    this.output += "finish showChart\n";
  }

  private clone() {
    this.navigatorService.view = "create";
  }

  private close() {
    this.navigatorService.view = "orders";
    this.orderGeneratorService.order = null;
  }
}

