import { TaskDto } from './taskdto.type';

export class OrderDto {
    evaluationId: String;
    _id: String;
    name: String;
    status: String;
    tasks: Array<TaskDto>;
}
