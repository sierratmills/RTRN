import { User } from "./user";
import { List } from "./list";

export class UserLists{
    private user: User;
    private lists: Array<List>;

    constructor(us: User, lts: Array<List>){
        this.user = us;
        this.lists = lts;
    }

    addList(lt: List){
        //add list to lists
    }

    deleteList(lt: List){
        //delete list from lists
    }
}