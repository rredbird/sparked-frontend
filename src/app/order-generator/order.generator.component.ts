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

    order: OrderDto;
    title: String = "LOLCATS3";
    // selector: String = "main";
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
      this.order = orderGeneratorService.order;
    }

    ngOnInit() {
    }

    private cancel() {
      this.navigatorService.view='orders';
    }

    private create() {
      this.orderGeneratorService.order = this.order;
      this.orderGeneratorService.createOrder(this.title, this.dataset, this.classifiers, this.metric, this.method);
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
      var retVal = value.replace("org.apache.spark.ml.classification.", "");
      retVal = retVal.replace("com.gt_arc.coda.ml.validation.", "");
      retVal = retVal.replace("_", " ");
      retVal = retVal.replace("avg", "average ");
      retVal = retVal.replace("min", "minimum ");
      retVal = retVal.replace("max", "maximum ");
      retVal = retVal.replace("per", "per ");
      retVal = retVal.replace("true", "true ");
      retVal = retVal.replace("false", "false ");

      return retVal;
    }

    private addClassifier() {
      this.classifiers.push(this.classifier);
    }

    private selectClassifier(value : ClassifierDto) {
      this.classifier = this.cloneClassifierObject(value);
      this.detail = "classifier";
    }

    private openClassifier(value : ClassifierDto) {
      this.classifier = value;
      this.detail = "classifier";
    }

    private cloneClassifier(value : ClassifierDto) {
      this.classifier = this.cloneClassifierObject(value);
      this.detail = "classifier";
    }

    private deleteClassifier(value : ClassifierDto) {
      this.classifiers.splice(this.classifiers.indexOf(this.classifier), 1);
      // this.selector='showClassifiers';
    }

    private cloneClassifierObject(value : ClassifierDto) : ClassifierDto {
      var classifier : ClassifierDto = new ClassifierDto();
      classifier.id = value.id;
      classifier.description = value.description;
      classifier.name = value.description;
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
