import { ParameterDto } from './parameterdto.type'

export class ClassifierDto {
    id: String;
    name: String;
    parameters: ParameterDto[];
    selected : Boolean;
}
