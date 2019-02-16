import { ParameterDto } from './parameterdto.type'

export interface ValidationMethodDto {
    id: String;
    name: String;
    selected: Boolean;
    parameter: ParameterDto[];
}
