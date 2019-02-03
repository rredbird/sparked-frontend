import { ClassifierDto } from './classifierdto.type';

export class OrderDto {
    id: String;
    name: String;
    orderStatus: String;
    classifiers: ClassifierDto[];
}
