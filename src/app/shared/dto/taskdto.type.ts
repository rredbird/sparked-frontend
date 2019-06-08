import { ClassifierDto } from './classifierdto.type';
import { identifierModuleUrl } from '@angular/compiler';
import { DatasetDto } from './datasetdto.type';
import { ValidationMethodDto } from './validationmethoddto.type';
import { MetricDto } from './metricdto.type';

export class TaskDto {
    id: String;
    classifier: ClassifierDto;
    dataset: DatasetDto;
    validationMethod: ValidationMethodDto;
    status: String;
    metric: MetricDto;
}
