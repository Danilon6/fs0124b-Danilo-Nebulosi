import { IToDoArr } from "./i-to-do-arr";


export interface IUserWithToDos {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    title: string;
    todo: IToDoArr[];
}
