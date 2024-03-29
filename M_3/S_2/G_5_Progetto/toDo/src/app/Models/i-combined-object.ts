import { iTodo } from "./todo";
import { iUsers } from "./users";

export interface iCombinedObject {
    [key: number]: iTodo & iUsers
}
