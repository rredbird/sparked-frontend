import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';
import { OrderDto } from '../shared/dto/orderdto.type';
import { MetricDto } from '../shared/dto/metricdto.type';
import { DatasetDto } from '../shared/dto/datasetdto.type';
import { ClassifierDto } from '../shared/dto/classifierdto.type';
import { ValidationMethodDto } from '../shared/dto/validationmethoddto.type';
import { NavigatorService } from '../navigator-service/navigator.service';
import { OrderGeneratorService } from '../order-generator-service/order.generator.service';
import { SearchService } from '../search-service/search.service';
import { ParameterDto } from '../shared/dto/parameterdto.type';

@Component({
  selector: 'app-order-generator',
  templateUrl: './order.generator.component.html',
  styleUrls: ['./order.generator.component.scss']
})
export class OrderGeneratorComponent implements OnInit {

    title: String = "Please rename me";
    workflow: String = "order";
    detail: String = "main";
    dataset: DatasetDto = undefined;
    metric: MetricDto = undefined;
    method: ValidationMethodDto = undefined;
    classifiers: Array<ClassifierDto> = new Array<ClassifierDto>();
    classifier : ClassifierDto = undefined;
    parameter : ParameterDto = { 
      name: "",
      doc: "",
      value: "",
      paramType: "",
      javaType: ""
    };

    constructor(private navigatorService: NavigatorService, private orderGeneratorService: OrderGeneratorService) {
    }

    private order() : OrderDto {
      return this.orderGeneratorService.order;
    }

    public loadOrder() {
      if(this.order().tasks.length > 0) {
        this.dataset = this.order().tasks[0].dataset;
        this.metric = this.order().tasks[0].metric;
        this.method = this.order().tasks[0].validationMethod;
        this.order().tasks.forEach(task => {
          this.classifiers.push(task.classifier);
        });
      }
    }

    ngOnInit() {
    }

    private cancel() {
      this.navigatorService.view='orders';
    }

    private validateOrder() {
      if(this.method == null || this.method == undefined) {
        this.detail = 'error-on-creation';
        return;
      }
      if(this.dataset == null || this.dataset == undefined) {
        this.detail = 'error-on-creation';
        return;
      }
      if(this.metric == null || this.metric == undefined) {
        this.detail = 'error-on-creation';
        return;
      }
      if(this.classifiers == null || this.classifiers == undefined || this.classifiers .length == 0) {
        this.detail = 'error-on-creation';
        return;
      }
      this.detail = 'confirm-creation';
    }

    private create() {
      this.navigatorService.view = 'order';
      
      this.orderGeneratorService.createOrder(this.title, 
        this.dataset, 
        this.classifiers, 
        this.metric, 
        this.method);
    }

    private start() {
      this.navigatorService.view = 'order';
      
      this.orderGeneratorService.startOrder(this.title, 
        this.dataset, 
        this.classifiers, 
        this.metric, 
        this.method);
    }

    private setDataset(value : DatasetDto) {
      console.log("Select: " + value.id);
      this.dataset = value;
    }
    private setMetric(value : MetricDto) {
      console.log("Select: " + value.id);
      this.metric = value;
    }
    private setMethod(value : ValidationMethodDto) {
      console.log("Select: " + value.id);
      this.method = value;
    }

    private shorten(value : String) : String {
      var retVal = value.replace("org.apache.spark.ml.", "");
      retVal = retVal.replace("com.gt_arc.coda.ml.", "");
      retVal = retVal.replace("validation.", "");
      retVal = retVal.replace("classification.", "");
      retVal = retVal.replace("classifiers.", "");
      retVal = retVal.replace("_", " ");
      retVal = retVal.replace("avg", "average ");
      retVal = retVal.replace("min", "minimum ");
      retVal = retVal.replace("max", "maximum ");
      retVal = retVal.replace("per", "per ");
      retVal = retVal.replace("true", "true ");
      retVal = retVal.replace("false", "false ");
      retVal = retVal.replace("  ", " ");

      return retVal;
    }

    public addClassifier() {
      if(this.classifiers.indexOf(this.classifier) < 0) {
        this.classifiers.push(this.classifier);
      }
    }

    public cloneClassifier(value : ClassifierDto) : ClassifierDto {
      var classifier : ClassifierDto = new ClassifierDto();
      classifier.id = value.id;
      classifier.description = value.description;
      classifier.name = value.name;
      classifier.parameters = new Array<ParameterDto>();

      value.parameters.forEach(element => {
        let parameter : ParameterDto = {
          doc : element.doc,
          name : element.name,
          value : element.value,
          javaType : element.javaType,
          paramType : element.paramType
        };

        classifier.parameters.push(parameter);
      });

      return classifier;
    }

    private deselectClassifier(value : ClassifierDto) {
      let helperArray = this.classifiers;
      this.classifiers = new Array<ClassifierDto>();
      
      helperArray.forEach(element => {
        if(element != value) {
          this.classifiers.push(element);
        }
      });
    }

    private isSelected(value) {
      if(value == undefined) {
        return false;
      }
      if(value == this.metric ||
          value == this.dataset || 
          value == this.method) {
        return true;
      }
      if(this.classifiers != undefined && 
          this.classifiers.length > 0 && 
          this.classifiers.indexOf(value) >= 0) {
        return true;
      }
      return false;
    }

    private validDatasetSelection() : Number {
      if(this.dataset != undefined) {
        return 1;
      }
      return 0;
    }
    private validClassifierSelection() : Number {
      if(this.classifiers.length > 0) {
        return 2;
      }
      return 0;
    }
    private validMethodSelection() : Number {
      if(this.method != undefined) {
        return 1;
      }
      return 0;
    }
    private validMetricSelection() : Number {
      if(this.metric != undefined) {
        return 1;
      }
      return 0;
    }

    private mouseoverParameter(value : ParameterDto) {
      this.parameter = value;
    }
}
