import { IUser } from './i-user';

export class User implements IUser {
    public id: number;
    public firstName: string;
    public lastName: string;
}
