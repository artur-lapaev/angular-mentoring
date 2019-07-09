import { ICourse } from './i-course';

export class Course implements ICourse {
    public id: number;
    public title: string;
    public creationDate: string;
    public duration: number;
    public description: string;
}
