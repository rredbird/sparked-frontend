import { ClassifierDto } from './classifierdto.type';
import { identifierModuleUrl } from '@angular/compiler';

export class OrderDto {
    id: String;
    name: String;
    orderStatus: String;
    labels: String[];
    classifiers: ClassifierDto[];
}
