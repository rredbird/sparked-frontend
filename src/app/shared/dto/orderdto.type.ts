import { TaskDto } from './taskdto.type';

export class OrderDto {
    id: String;
    name: String;
    status: String;
    tasks: Array<TaskDto>
}
