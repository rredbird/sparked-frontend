import { ParameterDto } from './parameterdto.type'

export interface ValidationMethodDto {
    id: String;
    name: String;
    parameter: ParameterDto[];
}
