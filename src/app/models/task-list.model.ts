import { Task } from './task.model';

export class TaskList {
    id: string;
    title: string;
    color: string;
    column: number;
    tasks: Task[];
    created_date: string;
    item_type: string;
}