import { 
    UserData, 
    UserObjectData, 
    UsersListData, 
} from "../../domain/entities/shared/users.interface";
import { User } from "../../domain/entities/user";

export class Users {
    public users: UsersListData;

    private constructor (user: UserObjectData) {
        this.users = [user];
    }

    public static create(props: UserData): Users {
        const user = User.create(props);
        
        return new Users(user)
    } 

    public addUser(props: UserData): void {
        const user = User.create(props);
        
        this.users = [
            ...this.users,
            user,
            ];
    }

    public getUsers(): UsersListData {
        return this.users
      }
}
