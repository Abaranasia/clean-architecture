import { 
    UserData, 
    UserObjectData, 
    UsersObjectData,
} from "../../domain/entities/shared/users.interface";
import { User } from "../../domain/entities/user";

export class Users {
    public users: UsersObjectData;

    private constructor (user: UserObjectData) {
        this.users = {
        [user.id.id]: user,
        };
    }

    public static create(props: UserData): Users {
        const user = User.create(props);
        
        return new Users(user)
    } 

    public addUser(props: UserData): void {
        const user = User.create(props);
        
        this.users = {
            ...this.users,
            [user.id.id]: user,
            };
    }

    public getUsers(): UsersObjectData {
        return this.users
      }
}
