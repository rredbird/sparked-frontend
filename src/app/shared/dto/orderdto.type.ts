import { ClassifierDto } from './classifierdto.type';
import { identifierModuleUrl } from '@angular/compiler';

export class OrderDto {
    id: String;
    name: String;
    status: String;
    labels: String[];
    classifiers: ClassifierDto[];
}
