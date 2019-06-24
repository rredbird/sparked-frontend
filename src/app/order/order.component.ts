import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { OrderDto } from '../shared/dto/orderdto.type';
import { NavigatorService } from '../navigator-service/navigator.service';
import { BackendService } from '../backend-service/backend.service';
import { ClipboardService } from 'ngx-clipboard';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';
import { Chart, ChartData } from 'chart.js';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
// import 'chartjs-chart-box-and-violin-plot';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: any;

  detailId : String = "";

  public order() : OrderDto {
    return this.orderGeneratorService.order;
  }

  result;
  output : String = "";  
  view : String = 'info';

  constructor(private backendService : BackendService, 
      private navigatorService : NavigatorService,
      private orderGeneratorService : OrderGeneratorService, 
      private _clipboardService: ClipboardService) { 
    
    console.log("show order " + this.order().evaluationId);
    
    this.result = "STOP";
    this.backendService = backendService;
    console.log(this.order().evaluationId + " = " + this.order().name);
    
    if(this.order().status == "completed") {
      this.backendService.result(this.order().evaluationId).subscribe(
      data => { 
        this.result = data;
        this.flipShowMetric(this.order().tasks[0].metric);
      },
      err => { console.error(err) },
      () => console.log('result loaded...')
      );
    }
  }

  ngOnInit() {
  }

  copyIdToClipboard() {
    this._clipboardService.copyFromContent(this.order().evaluationId.toString());
  }

  private metrics() : [] {
    if(this.result == undefined) {
      return [];
    }
    if(this.result.evaluation_results == undefined) {
      return [];
    }
    return this.result.evaluation_results[0].evaluation.results.bestConfiguration.metrics;
  }
  
  private visibleMetricIndexes = [];

  public flipShowMetric(metric) {
    let index = 0;
    
    this.result.evaluation_results[0].evaluation.results.bestConfiguration.metrics.forEach(element => {
      if(element.id == metric.id) {
        this.visibleMetricIndexes.push(index);
        return;
      }
      index++;
    });
    
    this.showChart();
  }

  private showScatterChart() {
    let datasets = []; 
    console.log ("showChart()");
    this.visibleMetricIndexes.forEach(index => {
      let mean = [];
      var i = 1;
      this.result.evaluation_results.forEach(evaluation_result => {
        let value = evaluation_result.evaluation.results.bestConfiguration.metrics[index].mean;
        mean.push({x : i, y : value});
        i++;
      });
      datasets.push({
        data: mean,
        label: this.result.evaluation_results[0].evaluation.results.bestConfiguration.metrics[index].id,
        borderColor: '00CC00',
        fillColor: '0000CC', 
        fill: true
      })
    });

    var myChart = new Chart(this.chartRef.nativeElement, {
      type: 'scatter',
      data: {
        datasets: datasets,
      },
      options: {
        scales: {
          xAxes: [{ 
            gridLines : {
              display : false
            }
          }],
          yAxes: [{ 
            gridLines : {
              display : false
            } 
          }]
        }
      }
    });
  }

  private showBarChart() {
    console.log ("showChart()");

    let l = [];
    let i = 0;
    this.order().tasks.forEach(task => {
      i++;
      l.push("" + i);
    });
    let d = [];
    if(this.visibleMetricIndexes.length < 1) {
      return;
    }
    let index = this.visibleMetricIndexes[0];
    this.result.evaluation_results.forEach(evaluation_result => {
      let value = evaluation_result.evaluation.results.bestConfiguration.metrics[index].mean;
      d.push(value);
    });

    let dd = {
      labels: l,
      datasets: [
        {
          label: "",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: d
        }
      ]
    }
    
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: dd,
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "" + this.order().tasks[0].metric.id
        }
      }
    });
  }

  showLineChart() {
    // let datasets = []; 
    

    var color = Chart.helpers.color;
    var barChartData = {
      labels: ['Value', 'Value 2', 'Value 3', 'Value 4'],
      datasets: [{
        label: 'Dataset 1',
        //backgroundColor: '#d95f02',
        borderColor: '#d95f02',
        borderWidth: 1,
        data: [
          50,
          100, 
          130,
          0
        ],
        errorBars: {
          'Value': {plus: 20, minus: -30},
          'Value 2': {plus: 20, minus: -30},
          'Value 3': {plus: 20, minus: -30},
          'Value 4': {plus: 20, minus: -30}
        }
      }]
  
    };
  

    var myChart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: barChartData,
      options: {
        scales: {
          xAxes: [{ 
            gridLines : {
              display : false
            }
          }],
          yAxes: [{ 
            gridLines : {
              display : false
            } 
          }]
        },
        plugins: {
          chartJsPluginErrorBars: {
            width: '60%',
            //color: 'darkgray'
          }
        }
      }
    });
  }

  private showChart() {
    console.log ("showChart()");
    this.showBarChart();

    this.output += "finish showChart\n";
  }

  private start() {
    console.log("starting order...");
    this.backendService.startOrder(this.order()).subscribe(
      data => this.orderGeneratorService.order = data,
      err => console.error(err),
      () => console.log("order started: " + this.order().evaluationId)
      );
    this.order().status = "starting";
  }

  public clone() {
    this.navigatorService.view = "create";
  }

  public close() {
    this.navigatorService.view = "orders";
    this.orderGeneratorService.order = null;
  }
}

