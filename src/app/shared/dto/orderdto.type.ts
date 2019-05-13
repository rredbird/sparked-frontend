import { TaskDto } from './taskdto.type';

export class OrderDto {
    id: String;
    name: String;
    tasks: Array<TaskDto>
}
